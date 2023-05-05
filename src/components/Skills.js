import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { CircleProgress } from 'react-gradient-progress'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      skill: "English",
      value: 35
    },
    {
      skill: "Web development",
      value: 80
    },
    {
      skill: "HTML",
      value: 75
    },
    {
      skill: "CSS",
      value: 80
    },
    {
      skill: "JavaScript",
      value: 40
    },

    {
      skill: "Golang",
      value: 15
    },

    {
      skill: "React js",
      value: 80
    },

    {
      skill: "React Native",
      value: 20
    },

    {
      skill: "MongoDB",
      value: 15
    }

  ]

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
              <Carousel responsive={responsive} infinite className="skill-slider" itemClass='itemm'>
                {
                  skills.map(
                    (value) => <SkillPercentageCircle skill={value.skill} value={value.value} />)
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

const SkillPercentageCircle = ({ value = 10, skill = "English" }) => {
  return (
    <div className='circle-container' >
      <div style={{ width: 148, height: 148/* backgroundColor: 'red'  */ }}>
        {/* <p>{skill}</p> */}
        <CircleProgress width={148} percentage={value}
          primaryColor={["red", "blue"]}
        // styles={buildStyles({
        //   textSize: '9px',
        //   // pathColor: 'purple',
        //   // textColor: 'purple'
        // })} 
        />
      </div>
      <div className='skills-name'><p>{skill}</p></div>
    </div>
  )
}