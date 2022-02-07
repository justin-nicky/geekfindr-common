import { Subjects } from './subjects'

export interface ProfileFollowingAddedEvent {
  subject: Subjects.ProfileFollowingAdded
  data: {
    followerId: string
    followeeId: string
  }
}
