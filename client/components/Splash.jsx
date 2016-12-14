import { Link } from 'react-router';
import init from './splash.js';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    init();
  }


  render() {
    return (
    <div>
    <div className="ten">
      <img src="kf-lg.png" />
      <div className="entry row">
        <p>
          Welcome to Keep-Fit, please log in to continue.
        </p>
        <form className="col-sm-12">
          <input placeholder="Username" required/><br />
          <input placeholder="Password" required/><br />
          <button className="btn btn-default">Log In</button>
        </form>
        <i>Don't have an account? <Link to="/signup">Sign up!</Link></i>
      </div>
    </div>
    <canvas id="scene" className="zero"></canvas>
    </div>
  );
  };
};