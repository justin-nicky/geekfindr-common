import { Subjects } from './subjects'

export interface UserCreatedEvent {
  subject: Subjects.ProfileFollowingAdded
  data: {
    followerId: string
    followeeId: string
  }
}
