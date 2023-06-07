import React, { useEffect } from "react";
import { useRecorder } from "use-recorder";
import axios from 'axios'
// import { Card } from "./card";
// import { Button } from "./button";

const RecorderStarus = {
  PAUSED: "paused",
  RECORDING: "recording",
  PLAYING: "playing",
  SILENT: "silent"
};
export default function App() {
  const [status, setStatus] = React.useState(RecorderStarus.PAUSED);
  const { start, stop, player, audio } = useRecorder();

  const actions = {
    [RecorderStarus.RECORDING]: start,
    [RecorderStarus.PAUSED]: stop,
    [RecorderStarus.PLAYING]: () => player.play(),
    [RecorderStarus.SILENT]: () => player.pause()
  };

  const handleAction = action => {
    setStatus(action);
    actions[action]();
  };

  async function uploadAudio() {
    try {
      const formData = new FormData()
      // formData.append('file', audio(), 'audio.wav')
      console.log(audio)
      const response = await axios.post('/api/emotion-in-voice/voice', formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(await response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
      uploadAudio()
  }, [audio])

  return (
    <div className="container">
      <div id="flow">
        <span className="flow-1" />
        <span className="flow-2" />
        <span className="flow-3" />
      </div>
      <div className="row columns">
        <div className="column is-half is-offset-one-quarter">
            <div className="buttons">
              {(status === RecorderStarus.PAUSED ||
                status === RecorderStarus.SILENT) && (
                <button
                  icon="microphone"
                  onClick={() => handleAction(RecorderStarus.RECORDING)}
                  color="danger"
                >
                  record
                </button>
              )}
              {status === RecorderStarus.RECORDING && (
                <button
                  icon="stop"
                  color="danger"
                  onClick={() => {
                    handleAction(RecorderStarus.PAUSED);

                  }}
                  animate={true}
                >
                  stop recording
                </button>
              )}
            </div>
            {!!player && (
              <button icon="download" color="info">
                <a
                  href={player.src}
                  tooltip="download last recording"
                  download={`recording-${Date.now()}`}
                >
                  <span>download</span>
                </a>
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
