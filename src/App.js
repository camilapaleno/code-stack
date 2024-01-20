import Spline from '@splinetool/react-spline';
import './App.css';

export default function App() {
  return (
    
    <div>
      <div className='nav'>
        <ul>
          <li> <span><b>code</b> stack</span> development</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </ul>
      </div>
      <div className='hero'>

        <div className='text'>
          <h1>We're obsessed with creating mobile applications.</h1>
          <p>At Code Stack, our expert developers and designers tirelessly pushes boundaries to make your app vision a reality.</p>
          <a href='#'>Reach Out to Us</a> <a href='#'>Learn More</a>
          <br/>
          <div>
            <span>300+</span>
            <p>Applications Made</p>
          </div>
          <div>
            <span>20+</span>
            <p>Years Experience</p>
          </div>
          <div>
            <span>50+</span>
            <p>Partners</p>
          </div>
        </div>

        <div className='spline-container'>
          <div className='spline'>
            <Spline scene="https://prod.spline.design/iEvoloQ8wiW1jRWU/scene.splinecode" />
          </div>
        </div>
      
      </div>
    </div>

  );
}