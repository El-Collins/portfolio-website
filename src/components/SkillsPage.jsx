import React from "react";
import skillsData from '../assets/skillsData'


const SkillCircle = ({ name, percentage, color, icon }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progress = (100 - percentage) / 100; // Invert percentage for clockwise fill

  const circleStyle = {
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: progress * circumference,
    stroke: color,
  };

  return (
    <div className="text-center m-4">
      <svg className="w-32 h-32">
        <circle
          r={radius}
          cx={radius + 12} // To center the circle
          cy={radius + 12} // To center the circle
          strokeWidth="5"
          fill="transparent"
          style={circleStyle}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
        >
          {percentage}%
        </text>
      </svg>
      <div className="flex justify-center gap-x-2">
      <img src={icon} width={20} alt="" />      
        <p className="mt-2">{name}</p>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  return (
  
        <div>
          <h1 className="font-secondary text-accent uppercase font-bold text-[35px] lg:text-[45px] lg:mb-5 lg:mt-20 text-center">
            My Skills
          </h1>

          <div className="flex flex-wrap justify-center">
            {skillsData.map((skill, index) => (
              <SkillCircle
                key={index}
                name={skill.name}
                icon={skill.icon}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>
    

  );
};

export default SkillsPage;
