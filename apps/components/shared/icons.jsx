export const CloseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="currentColor"
      className={`bi bi-x ${props.className ? ' ' + props.className : ''}`}
      viewBox="0 0 16 16"
      alt="Tutup Menu"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
};

export const MenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className={`bi bi-list ${props.className ? ' ' + props.className : ''}`}
      viewBox="0 0 16 16"
      alt="Buka Menu"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

export default function Icon(icon, className = '') {
  if (icon == 'CloseIcon') {
    return <CloseIcon className={className} />;
  } else if (icon == 'MenuIcon') {
    return <MenuIcon className={className} />;
  }
  return 'No Icon';
}
