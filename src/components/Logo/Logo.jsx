import logoMugMuse from '@images/logo-MugMuse.png';

const Logo = () => {
  return (
    <a className="logo" href="#">
      <img
        src={logoMugMuse}
        alt="Logo MugMuse"
      />
      <span>Mug Muse</span>
    </a>
  );
};

export default Logo;
