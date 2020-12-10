// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                    video: {
                    resolution: '1080p'
                    }
            }
        }
    }

    
    clickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    };

    clickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                
                resolution: '720p'
                }
            }
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="bitrate">Bitrate</button>
                <button onClick={this.clickResolution} className="resolution">Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger