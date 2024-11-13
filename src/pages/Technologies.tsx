import { Tooltip } from '@nextui-org/react';
import technologies from '../data/Technologies.json';

export default function Technologies() {
  return (
    <div className="min-h-screen p-4 bg-white flex flex-col gap-8 items-center">
      <h1 className="mt-4 text-slate-800 font-black text-3xl md:text-4xl lg:text-5xl">
        Tecnologías
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {technologies.map((tech) => (
          <Tooltip
            key={tech.id}
            showArrow={true}
            content={<p className="font-medium text-slate-600">{tech.name}</p>}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24  bg-gray-100 rounded-full flex flex-col items-center justify-center shadow-xl transition-transform duration-500 hover:rotate-180 cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-full"
                src={tech.source}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
