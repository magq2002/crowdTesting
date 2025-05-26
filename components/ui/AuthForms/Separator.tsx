interface Props {
  text: string;
}

export default function Separator({ text }: Props) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 text-gray-400 bg-black">{text}</span>
      </div>
    </div>
  );
}
