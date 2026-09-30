import { profile } from './data/config';

function App() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 bg-[#0a0a0c]">
        <div className="w-full max-w-md space-y-6">

          {/* Шапка в виде карточки Bento */}
          <div className="flex items-center gap-5 p-5 mb-4 rounded-3xl bg-[#111215] border border-zinc-800/80 shadow-lg">
            {/* Аватар */}
            <div className="relative shrink-0">
              <img
                  className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700/50 shadow-md"
                  src={profile.avatarUrl}
                  alt={profile.name}
              />
            </div>

            {/* Текст */}
            <div className="flex flex-col justify-center space-y-1 text-left min-w-0">
              <h1 className="text-xl font-bold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="text-xs font-mono text-zinc-400">
                @{profile.nicknames[0]} <span className="text-zinc-600 font-sans mx-0.5">/</span> @{profile.nicknames[1]}
              </p>
              <p className="text-xs text-zinc-400 pt-0.5">
                {profile.status}
              </p>
            </div>
          </div>
          {/* Bento Grid — 4 колонки в разнаброс */}
          <div className="grid grid-cols-4 gap-3 auto-rows-22.5">
            {profile.links.map((link) => {
              const Icon = link.icon;

              return (
                  <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.title}
                      className={`group relative flex flex-col justify-between p-4 rounded-3xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-md overflow-hidden ${link.spanClass} ${link.cardStyle}`}
                  >
                    {/* Логотип сервиса (крупный) */}
                    <div className="relative z-10 flex items-start justify-start">
                      <Icon className={`${link.iconSizeClass} transition-transform duration-300 group-hover:scale-110`} />
                    </div>

                    {/* Нижняя кнопка со стрелочкой ↗ в стиле первого скрина */}
                    <div className="relative z-10 self-end mt-auto">
                      <div className="w-7 h-7 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-current group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <svg
                            className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H8M17 7V16" />
                        </svg>
                      </div>
                    </div>
                  </a>
              );
            })}
          </div>

        </div>
      </main>
  );
}

export default App;