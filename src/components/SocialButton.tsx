
const SocialButton = ({ id, url, icon }) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <button id={id} className="btn btn-primary" onClick={handleClick}>
            <i className={icon}></i>
        </button>
    );
};

export default SocialButton;
