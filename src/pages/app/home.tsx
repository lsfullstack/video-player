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
    <div className="flex flex-col w-full p-12 bg-slate-900 items-center gap-12">
      {links.map(
        (
          link: { title: string; url: string; order: number },
          index: number,
        ) => (
          <div key={index} className="w-full max-w-[80%] aspect-video">
            <h2 className="text-2xl font-bold">{link.title}</h2>
            <iframe
              className="w-full h-full"
              src={`https://drive.google.com/file/d/${link.url}/preview`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        ),
      )}
    </div>
  )
}
