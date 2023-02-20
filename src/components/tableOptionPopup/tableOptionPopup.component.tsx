import { useEffect, useRef } from "react";
import { ReactComponent as ViewDetails } from "../../assets/img/viewDetailsIcon.svg";
import { ReactComponent as BlacklistUser } from "../../assets/img/blackListUser.svg";
import { ReactComponent as ActivateUser } from "../../assets/img/activateUsersIcons.svg";
import "./tableOptionPopup.style.scss";

interface OptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  position: { left: number; top: number };
  rowId: string;
}

const TableOptionPopup = ({
  isOpen,
  onClose,
  position,
  rowId,
}: OptionPopupProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <div
      ref={ref}
      className={`optionPopup ${isOpen ? "open" : ""}`}
      style={{ left: position.left, top: position.top }}
    >
      <button style={{ marginTop: 0 }} className="viewDetails button">
        <ViewDetails />
        <span className="text">View Details</span>
      </button>
      <button className="blacklistUser button">
        <BlacklistUser />
        <span className="text">Blacklist User</span>
      </button>
      <button className="activateUser button">
        <ActivateUser />
        <span className="text">Activate User</span>
      </button>
    </div>
  );
};

export default TableOptionPopup;
