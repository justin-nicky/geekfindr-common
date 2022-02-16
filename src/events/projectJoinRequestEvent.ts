import { Subjects } from './subjects'

export interface ProjectJoinRequestEvent {
  subject: Subjects.ProjectJoinRequest
  data: {
    projectId: string
    userId: string
  }
}
