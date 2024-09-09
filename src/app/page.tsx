import Image from 'next/image';
import avatar from '../assets/avatar.jpg';
import SkillItem from '../components/SkillItem/SkillItem';

export default function Home() {
  const skills = [
    {
      title: 'NodeJS',
      percent: 88,
    },
    {
      title: 'NextJS',
      percent: 40,
    },
    {
      title: 'NestJS',
      percent: 75,
    },
    {
      title: 'Java/Kotlin',
      percent: 80,
    },
    {
      title: 'Flutter',
      percent: 20,
    },
    {
      title: 'Linux',
      percent: 75,
    },
    {
      title: 'Git',
      percent: 70,
    },
  ];
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col rounded-md border border-gray-400 w-full m-2 md:w-1/2 justify-between gap-5 p-2">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={avatar}
            alt="avatar.jpg"
            className="rounded-full object-cover max-w-[200px] max-h-[200px]"
          />
          <p className="font-bold text-lg">
            Hey! i`m Arash, Fullstack developer, expertise in NestJS and NextJS.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className='text-center'>My skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 w-full">
            {skills && skills.map((skill)=>(
              <SkillItem key={skill.title} percent={skill.percent} title={skill.title}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
