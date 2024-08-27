export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type RegisterUserData = User & {
  repeatedPassword: string
}
