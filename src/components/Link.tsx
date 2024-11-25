export const Link = ({ label, href }: { label: string; href: string }) => {
  return (
    <a href={href} target="_blank">
      {label}
    </a>
  );
};
