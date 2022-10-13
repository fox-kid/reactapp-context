import { useFontColorContext } from '../../context/FontColorContext';

import './styles.css';

const RainbowBox = () => {
    const { color, setColor } = useFontColorContext();

    return (
        <div className='rainbow__wrapper'>
            <h2>Rainbow box</h2>
            <div className='rainbow__actions'>
                <button className='btn btn--red' onClick={() => setColor('red')}>Change to red</button>
                <button className='btn btn--green' onClick={() => setColor('green')}>Change to green</button>
                <button className='btn btn--blue' onClick={() => setColor('blue')}>Change to blue</button>
                <button className='btn btn--orange' onClick={() => setColor('orange')}>Change to orange</button>
                <button className='btn btn--pink' onClick={() => setColor('pink')}>Change to pink</button>
            </div>
            <div className='rainbow__box' style={{backgroundColor: color}}></div>
        </div>
    )
}

export default RainbowBox;