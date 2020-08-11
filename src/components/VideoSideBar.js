import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSideBar.css'

const VideoSideBar = () => {

    const [liked, setLiked] = useState(false);



    return (
        <div className="videoSidebar">
            <div className="videoSideBar__button">
                {
                    liked ? (

                        <FavoriteIcon
                            onClick={e => setLiked(false)}
                        />
                    ) :
                    (
                        <FavoriteBorderIcon
                        onClick={e => setLiked(true)} 
                        />
                    )
                }
                <p>{liked ? 300 + 1 : 300}</p>

            </div>
            <div className="videoSideBar__button">
                <MessageIcon />
                <p>30</p>
                
            </div>
            <div className="videoSideBar__button">
                <ShareIcon />
                <p>100</p>
                
            </div>
        </div>
    )
}
export default VideoSideBar;
