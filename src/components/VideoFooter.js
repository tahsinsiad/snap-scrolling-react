import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './Videofooter.css'
import Ticker from 'react-ticker';

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@tahsinsiad</h3>
                <p>this is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {
                            ({index}) => (
                                <>
                                    <p>This is a song</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}
export default VideoFooter;
