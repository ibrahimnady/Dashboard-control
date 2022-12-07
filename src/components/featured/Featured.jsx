import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <i className="fa-solid fa-ellipsis-vertical"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Salse Made Today</p>
        <p className="amount">$4526</p>
        <p className="desc">Previous transactions processing. Last payments may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
            <i className="fa-solid fa-angle-down me-1"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
            <i className="fa-solid fa-angle-up me-1"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
            <i className="fa-solid fa-angle-up me-1"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
