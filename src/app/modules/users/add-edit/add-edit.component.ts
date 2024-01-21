import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AuthService } from '@app/core/services/auth.service';
import { AlertService } from '@app/core/services/alert.service';
import { UserService } from '@app/core/services/user.service';
import { FloatLabelType } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua/Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia/Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo, Democratic Republic of the',
    'Costa Rica',
    "Côte d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',

    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'São Tomé and Príncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad/Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'USA',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  states: string[] = [];
  lgas: string[] = [];
  selectedCountry?: string;
  selectedState?: string;
  selectedFile: File | null = null;

  checked = true;


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetStudentForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  studentForm!: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private userService: UserService,
    private http: HttpClient,
    private ngZone: NgZone
  ) //private studentApi: ApiService
  {}

  ngOnInit() {
    this.submitBookForm();

    // Fetch initial states for the first country if needed
    if (this.countries.length > 0) {
      this.fetchStates(this.countries[0]);
    }

    this.id = this.route.snapshot.params['id'];

    // form with validation rules
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      // password only required in add mode
      password: [
        '',
        [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])],
      ],
    });

    this.title = 'Add User';
    if (this.id) {
      // edit mode
      this.title = 'Edit User';
      this.loading = true;
      this.userService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => {
          this.form.patchValue(x);
          this.loading = false;
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  fetchStates(country: string) {
    this.selectedCountry = country;
    this.states = []; // Clear previous states
    this.lgas = []; // Clear previous LGAs

    // Replace with your actual API endpoint and request logic
    this.http
      .get<string[]>(`https://api.example.com/states/${country}`)
      .subscribe((states) => {
        this.states = states;
      });
  }

  fetchLGAs(state: string) {
    this.selectedState = state;
    this.lgas = []; // Clear previous LGAs

    // Replace with your actual API endpoint and request logic
    this.http
      .get<string[]>(`https://api.example.com/lgas/${state}`)
      .subscribe((lgas) => {
        this.lgas = lgas;
      });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }

    // Perform any additional actions with the selected file, such as:
    // - Displaying a preview
    // - Validation
    // - Uploading to a server
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.saveUser()
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User saved', true);
          this.router.navigateByUrl('/users');
        },
        error: (error) => {
          this.alertService.error(error);
          this.submitting = false;
        },
      });
  }

  private saveUser() {
    // create or update user based on id param
    return this.id
      ? this.userService.update(this.id!, this.form.value)
      : this.authService.register(this.form.value);
  }

  /* Reactive book form */
  submitBookForm() {
    this.studentForm = this.formBuilder.group({
      student_name: ['', [Validators.required]],
      student_email: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [this.subjectArray],
      dob: ['', [Validators.required]],
      gender: ['Male'],
    });
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    let input = (event.value || '').trim();
    let value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() });
    }
    // Reset the input value
    event.chipInput!.clear();
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(event: Event) {
    const e = event.target as HTMLInputElement;
    const convertDate = new Date(e.value).toISOString().substring(0, 10);

    if (this.studentForm) {
      this.studentForm.get('dob')?.setValue(convertDate, {
        onlyself: true,
      });
    }
  }


  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  };


  onBack(): void {
    this.router.navigate(['/users']);
  }

  /* Submit book */
  // submitStudentForm() {
  //   if (this.studentForm.valid) {
  //     this.studentApi.AddStudent(this.studentForm.value).subscribe((res) => {
  //       this.ngZone.run(() => this.router.navigateByUrl('/students-list'));
  //     });
  //   }
  // }
}

// import { Router, ActivatedRoute } from '@angular/router';
// import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
// import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import { MatChipInputEvent } from '@angular/material/chips';
// import { ApiService } from './../../shared/api.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// export interface Subject {
//   name: string;
// }

// @Component({
//   selector: 'app-edit-student',
//   templateUrl: './edit-student.component.html',
//   styleUrls: ['./edit-student.component.scss'],
// })
// export class EditStudentComponent implements OnInit {
//   visible = true;
//   selectable = true;
//   removable = true;
//   addOnBlur = true;
//   @ViewChild('chipList') chipList;
//   @ViewChild('resetStudentForm') myNgForm;
//   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
//   studentForm: FormGroup;
//   subjectArray: Subject[] = [];
//   SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

//   ngOnInit() {
//     this.updateBookForm();
//   }

//   constructor(
//     public fb: FormBuilder,
//     private router: Router,
//     private ngZone: NgZone,
//     private actRoute: ActivatedRoute,
//     private studentApi: ApiService
//   ) {
//     var id = this.actRoute.snapshot.paramMap.get('id');
//     this.studentApi.GetStudent(id).subscribe((data) => {
//       this.subjectArray = data.data.subjects;
//       this.studentForm = this.fb.group({
//         student_name: [data.data.student_name, [Validators.required]],
//         student_email: [data.data.student_email, [Validators.required]],
//         section: [data.data.section, [Validators.required]],
//         subjects: [data.data.subjects],
//         dob: [data.data.dob, [Validators.required]],
//         gender: [data.gender],
//       });
//     });
//   }

//   /* Reactive book form */
//   updateBookForm() {
//     this.studentForm = this.fb.group({
//       student_name: ['', [Validators.required]],
//       student_email: ['', [Validators.required]],
//       section: ['', [Validators.required]],
//       subjects: [this.subjectArray],
//       dob: ['', [Validators.required]],
//       gender: ['Male'],
//     });
//   }

//   /* Add dynamic languages */
//   add(event: MatChipInputEvent): void {
//     let input = (event.value || '').trim();
//     let value = event.value;
//     // Add language
//     if ((value || '').trim() && this.subjectArray.length < 5) {
//       this.subjectArray.push({ name: value.trim() });
//     }
//     // Reset the input value
//     if (input) {
//       event.chipInput!.clear();
//     }
//   }

//   /* Remove dynamic languages */
//   remove(subject: Subject): void {
//     const index = this.subjectArray.indexOf(subject);
//     if (index >= 0) {
//       this.subjectArray.splice(index, 1);
//     }
//   }

//   /* Date */
//   formatDate(e) {
//     var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
//     this.studentForm.get('dob').setValue(convertDate, {
//       onlyself: true,
//     });
//   }

//   /* Get errors */
//   public handleError = (controlName: string, errorName: string) => {
//     return this.studentForm.controls[controlName].hasError(errorName);
//   };

//   /* Update book */
//   updateStudentForm() {
//     console.log(this.studentForm.value);
//     var id = this.actRoute.snapshot.paramMap.get('id');
//     if (window.confirm('Are you sure you want to update?')) {
//       this.studentApi
//         .UpdateStudent(id, this.studentForm.value)
//         .subscribe((res) => {
//           this.ngZone.run(() => this.router.navigateByUrl('/students-list'));
//         });
//     }
//   }
// }
