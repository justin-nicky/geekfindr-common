import { Subjects } from './subjects'

export interface UserCreatedEvent {
  subject: Subjects.ProjectCreated
  data: {
    id: string
    name: string
    owner: string
  }
}
