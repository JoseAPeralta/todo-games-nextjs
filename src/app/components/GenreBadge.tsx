import { Badge } from "@/app/styled";

interface genreBadge {
  children: string;
  className?: string;
  as?: string;
}

interface IObjectKeys {
  [key: string]: string;
}

const bgColors: IObjectKeys = {
  racing: "bg-red-900",
  shooter: "bg-orange-900",
  adventure: "bg-orange-700",
  action: "bg-yellow-900",
  rpg: "bg-lime-900",
  fighting: "bg-green-900",
  puzzle: "bg-emerald-900",
  strategy: "bg-teal-900",
  arcade: "bg-cyan-900",
  simulation: "bg-sky-900",
  card: "bg-blue-900",
  family: "bg-indigo-900",
  boardgames: "bg-violet-900",
  educational: "bg-purple-900",
  casual: "bg-fuchsia-900",
  indie: "bg-pink-900",
  massivelymultiplayer: "bg-rose-900",
  platformer: "bg-gray-700",
  sports: "bg-zinc-700",
};

const GenreBadge = ({ children, as, className }: genreBadge) => {
  const genre = children.toLowerCase().replaceAll(/\s/g, "");
  return (
    <Badge
      as={as}
      className={`${className}  text-slate-200 ${bgColors[genre]}`}
    >
      {genre}
    </Badge>
  );
};

export default GenreBadge;
