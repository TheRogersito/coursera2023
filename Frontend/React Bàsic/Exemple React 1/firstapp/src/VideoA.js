import ReactPlayer from "react-player";

function VideoA(props){
    return(
        <div className="videoa">
            <ReactPlayer 
            url={props.url}
            playing={false}
            volume={0.4}
            controls
            />
        </div>
    )
}
export default VideoA;