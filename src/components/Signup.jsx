import React from "react";
import { useForm } from "react-hook-form";




export default function Signup() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = data => {
        delete data.confirmPassword;
        fetch('http://localhost:3002/signup', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            alert('You are registered')
        })
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
           
            <input placeholder="password" type="password" {...register("password", { required: true, minLength: 8 })} />
            {errors.password?.type === 'required' && <span>This field is required</span>}
            {errors.password?.type === 'minLength' && <span>This field needs to be more than 8 characters </span>}

            <input placeholder="password confirm" type="password" {...register("confirmPassword", {
                validate: value => getValues('password') === value
            })} />
            {errors.confirmPassword && <span>This field needs to be the same as the password </span>}
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="firstname" {...register("firstName")} />
            <input placeholder="surname" {...register("surname")} />
            <input placeholder="date of birth" type="date" {...register("dateOfBirth")} />

            <input type="submit" />
        </form>
    )
}