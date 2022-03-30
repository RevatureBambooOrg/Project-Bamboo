export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;

  constructor(
    id: number=0,
    firstName: string='',
    lastName: string='',
    username: string='',
    password: string='',
    email: string='',
) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  valid() {
    return (this.firstName.trim() && this.lastName.trim() && this.username.trim() && this.lastName.trim() &&this.password.trim())
  }
  validLogIn() {
    return (this.username.trim() && this.password.trim())
  }

}