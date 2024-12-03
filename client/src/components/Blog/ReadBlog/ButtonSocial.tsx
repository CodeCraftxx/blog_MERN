import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
type Props = {
  text: string;
  fontIcon: IconDefinition
}
function ButtonSocial({text, fontIcon}: Props) {
  return (
    <button className="border border-black sm:px-[3rem] px-[1rem] sm:py-2 py-1 rounded-full hover:bg-black hover:text-white">
      {text}
      <FontAwesomeIcon className="ms-2" icon={fontIcon} />
    </button>
  );
}

export default ButtonSocial;
