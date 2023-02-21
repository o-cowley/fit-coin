import "./Component_Styling/Bullseye.css"


export default function Bullseye({addScore, shapeType}) {
    // 

    const onClick_outer = () =>  {
        console.log('clicked the outside ring')
        addScore(1);
    };

    const onClick_middle = () => {
        console.log('clicked the middle ring')
        addScore(2);
    };

    const onClick_inner = () => {
        console.log('clicked the inside ring')
        addScore(3);
    };

    const onClick_bull = () => {
        console.log('BULLSEYE')
        addScore(5);
    };

    const onClick_secret = () => {
        console.log('A SECRET')
        addScore(10);
    };

    return (
        <div className="container">
        <div className="grid-item">
            <div className={`outer ${shapeType}`} onClick={onClick_outer}></div>
            <div className={`middle ${shapeType}`} onClick={onClick_middle}></div>
            <div className={`inner ${shapeType}`} onClick={onClick_inner}></div>
            <div className={`tiny ${shapeType}`} onClick={onClick_bull}></div>
            <div className={`secret`} onClick={onClick_secret}></div>
        </div>
        </div>
    )
}
