import { Subjects } from './subjects'

export interface userCreatedEvent {
  subject: Subjects.UserCreated
  data: {
    userId: string
    userName: string
    email: string
    avatar: string
  }
}
