import { v4 as uuidv4 } from 'uuid';
export class Citizen {
  id: string
  name: string
  lastName: string
  userName: string
  birthDate: Date
  phone: string
  type: string
  email: string
  password: string
  membership: string
  emotions: {[key: string]: number};

  constructor(name: string, lastName: string, userName: string,
              birthDate: Date, phone: string, type: string, email: string,
              password: string, membership: string) {
    this.id= uuidv4()
    this.name = name
    this.lastName = lastName
    this.userName = userName
    this.birthDate = birthDate
    this.phone = phone
    this.type = type
    this.email = email
    this.password = password
    this.membership = membership
    this.emotions = {
      relajado: 0,
      ansioso: 0,
      cansado: 0,
      motivado: 0,
    }
  }
}
