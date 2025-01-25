
import { Pause,Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id, size = 'small' }) {
    const { 
        currentMusic, 
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic 
    } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = async () => {
        
        if(isPlayingPlaylist){
            setIsPlaying(!isPlaying)
            return
        }

     
        await fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const { playlist, songs } = data

            setIsPlaying(true)
            setCurrentMusic({ songs , playlist, song: songs[0] })

     
            
        })

      
      
/*  const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
    const data = await res.json() 
    const { playlists, songs } = data */
   
    }

 
const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button onClick={handleClick} className="card-play-button rounded-full text-black bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 ">
        {isPlayingPlaylist ? <Pause className={iconClassName}/> : <Play className={iconClassName}/>}
        
    </button>
    
  );
}