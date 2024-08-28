import z from 'zod'

export const employeeSchema = z.object({
    id: z.string().optional(),
    firstname: z
        .string({
            required_error: 'First name is required.',
        })
        .min(2, {
            message: 'First name must be at least 2 characters.',
        }),

    lastname: z
        .string({
            required_error: 'Last name is required.',
        })
        .min(2, {
            message: 'Last name must be at least 2 characters.',
        }),

    email: z.string({
        required_error: "Email is Required"
    }).email({ message: "Must be a valid email" }),
    salary: z.string({
        required_error: "Salary is Required"
    }).min(0, {
        message: "Salary must be greater than 0"
    }),
})

export type Employee = z.infer<typeof employeeSchema>