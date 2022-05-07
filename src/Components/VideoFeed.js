
import { Pose } from "@mediapipe/pose";
import { useRef, useEffect } from "react";
import * as poseMain from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";

const VideoFeed = ({ currentPose }) => {

    const videoStyle = {
        display: "none",
        
        width: "100%",
        height: "100%",
    }

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const connect = window.drawConnectors;
    const landmarks = window.drawLandmarks;

    var camera = null;

    //Setting height and width of the canvas
    function onResults(results) {
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");

        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image, 0, 0,
            canvasElement.width, canvasElement.height);


        // Only overwrite existing pixels.
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

        canvasCtx.globalCompositeOperation = 'source-in';
        canvasCtx.fillStyle = '#00FF00';
        canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

        // Only overwrite missing pixels.
        canvasCtx.globalCompositeOperation = 'destination-atop';
        canvasCtx.drawImage(
            results.image, 0, 0, canvasElement.width, canvasElement.height);

        canvasCtx.globalCompositeOperation = 'source-over';
        connect(canvasCtx, results.poseLandmarks, poseMain.POSE_CONNECTIONS,
            { color: 'grey', lineWidth: 4 });
        landmarks(canvasCtx, results.poseLandmarks,
            { color: 'blue', lineWidth: 2 });
        canvasCtx.restore();


        // currentPost(results.poseLandmarks);

    }


    useEffect(() => {
        const pose = new Pose({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
            },
        });


        pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        })

        pose.onResults(onResults)

        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
            // eslint-disable-next-line
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame: async () => {
                    await pose.send({ image: webcamRef.current.video })
                },
                width: 800,
                height: 600,
            });
            camera.start();
        }
    }, []);

    return (
        <center>
            <div className="">
                <Webcam
                    ref={webcamRef}
                    style={videoStyle} /> {" "}
                <canvas
                    ref={canvasRef}
                    className="output_canvas"
                    style={{
                        
                        
                        width: "800px",
                        height: "600px",
                    }}
                ></canvas>
            </div>
        </center>
    )
}

export default VideoFeed