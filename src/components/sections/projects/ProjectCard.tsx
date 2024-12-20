interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  link,
}: ProjectCardProps) => {
  return (
    <div>
      <a href={link}>
        <p>{title}</p>
        <p>{description}</p>
      </a>
    </div>
  );
};
