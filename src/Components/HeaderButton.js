const HeaderButton = ({ bg, textColor, label, type,borderColor,...props }) => {
    return (
      <button
        className={`header-btn ${
          bg === "primary" ? "bg-primary" : bg === "white" ? "bg-white" : "bg-grey-dark"
        }
  
        ${
          textColor === "primary" ? "text-primary" : textColor === "white" ? "text-white" : "text-black"
        }
        ${
          borderColor === "primary" ? "border-primary" :borderColor ==="black"? 'boarderBlack':"border-black border-0"
        }`
  
      }
      >
        {label}
      </button>
    );
  };
  
  export default HeaderButton;
  