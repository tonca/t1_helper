import React from 'react';
import '../styles/Values.css';

function ProfileValues({ baseBR, baseICR, baseCF, onParameterChange, overallChange, disableCorrections }) {
    let changeRatio = 1 + overallChange / 100;
    let profileBR = (baseBR * changeRatio).toFixed(1);
    let profileICR = (baseICR / changeRatio).toFixed(1);
    let profileCF = disableCorrections ? 1000 : (baseCF / changeRatio).toFixed(1);

    return (
        <div className="Values">
            <div>
                <h2>BASE VALUES</h2>
                <h2></h2>
                <h2>NEW PROFILE</h2>
            </div>

            <hr class='line' />
            <div className='Value'>
                <div>
                    <input
                        type="number"
                        value={baseBR}
                        onChange={(e) => onParameterChange(e.target.value, 'basalRate')}
                    />
                </div>
                <div><p><abbr title='Basal Rate'>BR</abbr></p></div>
                <div><span>{profileBR}</span></div>
            </div>
            <hr class='line' />
            <div className='Value'>
                <div>
                    <span>1/</span>
                    <input
                        type="number"
                        value={baseICR}
                        onChange={(e) => onParameterChange(e.target.value, 'ICR')}
                    />
                </div>
                <div><p><abbr title='Insulin to Carbohydrate Ratio'>ICR</abbr></p></div>
                <div><span>1/{profileICR}</span></div>
            </div>
            <hr class='line' />
            <div className='Value'>
                <div>
                    <span>1/</span>
                    <input
                        type="number"
                        value={baseCF}
                        onChange={(e) => onParameterChange(e.target.value, 'correctionFactor')}
                    />
                </div>
                <div><p><abbr title='Correction Factor'>CF</abbr></p></div>
                <div><span>1/{profileCF}</span></div>
            </div>
            <hr class='line' />
        </div>
    );
}


export default ProfileValues;
