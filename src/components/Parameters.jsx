import React from 'react';
import '../styles/Parameters.css';

function BaseValues({ baseBR, baseICR, baseCF, onParameterChange }) {

    return (
        <div className="BaseValues">
            <h2>BASE VALUES</h2>
            <hr class='line' />
            <div className='BaseValue'>
                <div><p><abbr title='Basal Rate'>BR</abbr></p></div>
                <div>
                    <input
                        type="number"
                        value={baseBR}
                        onChange={(e) => onParameterChange(e.target.value, 'basalRate')}
                    />
                </div>
            </div>
            <hr class='line' />
            <div className='BaseValue'>
                <div><p><abbr title='Insulin to Carbohydrate Ratio'>ICR</abbr></p></div>
                <div>
                    <span>1/</span>
                    <input
                        type="number"
                        value={baseICR}
                        onChange={(e) => onParameterChange(e.target.value, 'ICR')}
                    />
                </div>


            </div>
            <hr class='line' />
            <div className='BaseValue'>
                <div><p><abbr title='Correction Factor'>CF</abbr></p></div>
                <div>
                    <span>1/</span>
                    <input
                        type="number"
                        value={baseCF}
                        onChange={(e) => onParameterChange(e.target.value, 'correctionFactor')}
                    /></div>
            </div>
            <hr class='line' />
        </div>

    );
}

function PresetSettings({ onParameterChange }) {
    let presets = [
        {
            key: 'sport',
            text: 'Sport',
            settings: {
                'overallChange': -60,
                'disableCorrections': true
            }
        },
        {
            key: 'after-sport',
            text: 'After sport',
            settings: {
                'overallChange': -25,
                'disableCorrections': false
            }
        },
        {
            key: 'fat',
            text: 'Fat food',
            settings: {
                'overallChange': 30,
                'disableCorrections': false
            }
        }
    ]

    const applySetting = (obj) => {
        Object.entries(obj).forEach(
            ([setting, value]) => {
                onParameterChange(value, setting)
            }
        )
    }

    return (
        <div>
            <h2>presets</h2>
            <div className="PresetsSettings">
                {
                    presets.map(
                        item => {
                            return (<button type="button" key={item.text} onClick={_ => applySetting(item.settings)}>{item.text}</button>)
                        }
                    )
                }
            </div>
        </div>
    )
}

function ProfileSettings({ overallChange, disableCorrections, onParameterChange }) {
    return (
        <div className="ProfileSettings">
            <h2>profile settings</h2>
            <div className='SettingValues'>
                <hr class='line' />
                <div className='SettingValue'>
                    <div><p>overall change</p></div>
                    <div className='SettingInput'>
                        <span>{overallChange > 0 ? '+' : ''}{overallChange}%</span>
                        <input
                            type="range"
                            value={overallChange}
                            min="-99" max="100"
                            onChange={(e) => onParameterChange(e.target.value, 'overallChange')}
                        />
                    </div>
                </div>
                <hr class='line' />
                <div className='SettingValue'>
                    <div><p>disable corrections</p></div>
                    <div className='SettingInput'><input
                        type="checkbox"
                        id="disableCorrections"
                        checked={disableCorrections}
                        onChange={(e) => onParameterChange(e.target.checked, 'disableCorrections')}
                    />
                    </div>
                </div>
                <hr class='line' />
            </div>
            <PresetSettings onParameterChange={onParameterChange} />
        </div>
    );
}


export { BaseValues, ProfileSettings };
