import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch } from 'react-redux'
import { udpateForm } from './registerFormSlice'
import { useNavigate } from "react-router-dom";

const schema = yup
.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
})
.required()

export default function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    dispatch(udpateForm(data))
    navigate("/counter");
  }
  // const onSubmit = (data) => console.log(data)

  return (
    // <form onSubmit={handleSubmit((data) => dispatch(increment(data)))}>
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  )
}