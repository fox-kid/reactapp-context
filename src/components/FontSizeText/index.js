import { useFontColorContext } from '../../context/FontColorContext';

import './styles.css';

const FontSizeText = () => {
    const { fontSize, setFontSize } = useFontColorContext();

    return (
        <div className='font__wrapper'>
        <h2>Set font-size to text</h2>
        <div className='font__actions'>
            <button className='btn' onClick={() => setFontSize(12)}>Set to 12px</button>
            <button className='btn' onClick={() => setFontSize(16)}>Set to 16px</button>
            <button className='btn' onClick={() => setFontSize(20)}>Set to 20px</button>
            <button className='btn' onClick={() => setFontSize(24)}>Set to 24px</button>
            <button className='btn' onClick={() => setFontSize(32)}>Set to 32px</button>
            <button className='btn' onClick={() => setFontSize(48)}>Set to 48px</button>
        </div>
        <p style={{fontSize: fontSize}}>This text has a font size of { fontSize } px</p>
    </div>
    )
}

export default FontSizeText;