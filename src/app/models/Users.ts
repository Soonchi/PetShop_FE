export class Users{
  id: number
  username: string
  password: string
  email: string




  constructor(username: string, password: string, id: number, email: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
