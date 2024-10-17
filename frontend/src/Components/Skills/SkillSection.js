import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function SkillSection(props) {
    let section = props.section
    return (
        <>
            <div className='card'> <p className='sub-title'>{section.category}</p>
            <br></br>
                {section.items.map(function (item) {
                    return (
                        <div className="progressbar-container" style={{ width: 120, height: 120, display: "inline-block", margin: 15, position: "relative" }}>
                        <CircularProgressbar value={item.skill} className="progress-bar" styles={
                            buildStyles({
                                pathColor: `rgba(21, 244, 238, ${item.skill / 100})`,
                                trailColor: "rgba(255, 255, 255, 0.1)",
                            })
                        } />
                        <div style={{ textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>{item.name}</div>
                        </div>
                    )
                })}
            </div>
            <br></br>
        </>

    );
}



export default SkillSection;