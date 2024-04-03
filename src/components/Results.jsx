import React from 'react';
import '../styles/Results.css';

function ProfileValues({ baseBR, baseICR, baseCF, overallChange, disableCorrections }) {
    let changeRatio = 1 + overallChange / 100;
    let profileBR = (baseBR * changeRatio).toFixed(1);
    let profileICR = (baseICR / changeRatio).toFixed(1);
    let profileCF = disableCorrections ? 1000 : (baseCF / changeRatio).toFixed(1);

    return (
        <div className="ProfileValues">
            <h2>NEW PROFILE</h2>
            <hr class='line' />
            <div className='ProfileValue'>
                <div><p><abbr title='Basal Rate'>BR</abbr></p></div>
                <div><span>{profileBR}</span></div>
            </div>
            <hr class='line' />
            <div className='ProfileValue'>
                <div><p><abbr title='Insulin to Carbohydrate Ratio'>ICR</abbr></p></div>
                <div><span>1/{profileICR}</span></div>
            </div>
            <hr class='line' />
            <div className='ProfileValue'>
                <div><p><abbr title='Correction Factor'>CF</abbr></p></div>
                <div><span>1/{profileCF}</span></div>
            </div>
            <hr class='line' />
        </div>
    );
}


export default ProfileValues;
