import { AbstractControl, ValidatorFn } from "@angular/forms";

export default class CustomValidator {

    /**
     * The static match function checks if two parameters 
     * are exactly the same. Commonly used to validate passwords.
     * 
     * @param controlName 
     * @param checkControlName 
     * @returns 
     */
    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            if (checkControl?.errors && !checkControl.errors['matching']) {
              return null;
            }

            if (control?.value !== checkControl?.value) {
              controls.get(checkControlName)?.setErrors({ matching: true });
              return { matching: true };
            } else {
              return null;
            }
        };
    }

    /**
     * The isEmail function uses a regular expression
     * to validate that a string is a valid email.
     * 
     * @param controlName 
     * @returns 
     */
    static isEmail(controlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const regEx = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

            if(regEx.test(control?.value)) {
                controls.get(controlName)?.setErrors({ matching: true });
                return { matchin: true };
            } else {
                return null;
            }
        };
    }
}