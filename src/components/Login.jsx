import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3002/login', {
            method: 'POST',
            credentials: 'include', // Bien ajouter cette ligne pour que le cookie soit bien enregistré
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            alert('You are Logged')
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

            <input type="submit" />
        </form>
    )
}