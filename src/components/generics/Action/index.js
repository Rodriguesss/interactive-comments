import { Icon } from "../../../utils/images/import_images";
import { ActionStyle, ActionIcon } from "./style";

export default function Action() {
  return (
    <ActionStyle>
      <ActionIcon src={Icon["Reply"]} />
      <p>Reply</p>
    </ActionStyle>
  )
}