import { SkillItemProps } from './SkillItemProps';

export default function SkillItem({
  title,
  className,
  icon,
  percent,
  ...props
}: SkillItemProps) {
  return (
    <div
      id="main-parent"
      className={`${className} flex gap-2 w-full`}
      {...props}
    >
      <div className="flex items-center gap-2 basis-5/12">
        {icon && icon}
        {title}
      </div>
      <div
        id="progress-bg"
        className="flex w-full rounded-md bg-gray-950 p-1 basis-full"
      >
        <div
          id="progress-fill"
          className="p-1 rounded-md bg-jungle-200"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}
