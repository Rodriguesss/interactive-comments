import { ProfileIconStyle } from "./style";

export default function ProfileIcon({ avatar, size }) {
  return (
    <ProfileIconStyle src={avatar} size={size} />
  )
}