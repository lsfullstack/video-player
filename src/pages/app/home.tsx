import { env } from '@/env'

export function Home() {
  const links = (() => {
    try {
      const urls = JSON.parse(env.VITE_VIDEO_URLS || '[]')
      return urls.sort((a: any, b: any) => a.order - b.order)
    } catch (error) {
      console.error('Erro ao processar VIDEO_URLS:', error)
      return []
    }
  })()

  return (
    <div className="flex flex-col min-h-screen w-full p-4 lg:p-12 bg-slate-900 items-center gap-10">
      {links.length === 0 && (
        <p className="text-center text-xl text-white">
          Nenhum vídeo encontrado.
        </p>
      )}

      {links.map(
        (
          link: { title: string; url: string; order: number },
          index: number,
        ) => (
          <div
            key={index}
            className="flex flex-col w-full lg:max-w-[80%] gap-3 bg-slate-800 rounded-2xl p-4 shadow-md"
          >
            <h2 className="text-lg lg:text-2xl font-bold text-white text-center">
              {link.title}
            </h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://drive.google.com/file/d/${link.url}/preview`}
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        ),
      )}
    </div>
  )
}
