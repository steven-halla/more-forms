// validate = {values => {
//     let errors = {};
//     if (!values.email){
//         errors.email = "required";

//     } else if (!EmailValidator.validate(values.email)){
//         errors.email = "Invalid email address";
//     }

//     const passwordRegex = /?(?=.*[0-9])/;
//     if(!values.password){
//         errors.password = "Required";
//     } else if (values.password.length < 8 ) {
//         errors.password = "Password must be 8 characerters long.";
//     } else if (!passwordRegex.test(values.password)) {
//         errors.password = "Invalud password. must contain one number.";
//     }
//     return errors;
// }



