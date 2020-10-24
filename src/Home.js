import React from "react";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
const styles = {
    btnCss: {
     margin:"4% 0 0 4%",
     borderRadius:"5px"
    },
    imgCss:{
        width:"200px",
        height:'200px'
    },
    container:{
display:"flex",
justifyContent:"center",
alignItems:"center",

    }
    ,
    mainDiv:
    {display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center",height:"400px",width:"50%"},
    leftDiv:
    {width:"40%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},
    innerDiv:
    {display:"flex",alignItems:"center",border:"1px solid red",padding:"5%",width:"70%",height:"70vh"}
}


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { image:"",start:false, canfly:"", answer:["yes","no"],  girlans:"",boyans:"",out:false}
    }

    // componentDidMount() {
    //     this.imgID = setInterval(() => {
    //       this.tickImg();
    //     }, 3000);
        
    //   }
    //   componentWillUnmount() {
    //    if(this.state.out)
    //     clearInterval(this.imgID);
    //   }
    girlAnswer=()=>{
       var girlans = this.state.answer[Math.floor(Math.random() * this.state.answer.length)];
          this.setState({ girlans });
    }
    boyAnswer=()=>{
        var boyans = this.state.answer[Math.floor(Math.random() * this.state.answer.length)];
           this.setState({ boyans });
     }
      tickImg=()=> {
          var fileNames = [
              {img:"/01.jpg",fly:"yes"},
              {img:"/02.jpg",fly:"yes"},
              {img:"/03.jpg",fly:"yes"},
              {img:"/04.jpg",fly:"yes"},
              {img:"/05.jpg",fly:"yes"},
              {img:"/06.jpg",fly:"yes"},
              {img:"/07.jpg",fly:"yes"},
              {img:"/08.jpg",fly:"yes"},
              {img:"/09.jpg",fly:"yes"},
              {img:"/10.jpg",fly:"yes"},
              {img:"/11.jpg",fly:"yes"},
              {img:"/12.jpg",fly:"yes"},
              {img:"/130.jpg",fly:"no"},
              {img:"/131.jpg",fly:"no"},
              {img:"/132.jpg",fly:"no"},
              {img:"/134.jpg",fly:"no"},
              {img:"/121.jpg",fly:"no"},
              {img:"/135.jpg",fly:"no"},
              {img:"/129.jpg",fly:"no"}
            ],
            randomIndex = Math.floor(Math.random() * fileNames.length);
            this.girlAnswer();
            this.boyAnswer();
            var imgObject =  fileNames[randomIndex];
            this.setState({ image: imgObject.img,canfly:imgObject.fly });
      }



    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
{!this.state.start ?
<div style={styles.mainDiv}>
    <img src="/SS.png" style={{height:"250px"}}/>
<Button variant="contained" size="medium" color="primary" style={styles.btnCss} 
onClick={() => this.setState({start:true},()=>this.tickImg())} >
          Start
        </Button>
</div>
       : null}

{this.state.start ?
<>
<div style={styles.innerDiv}>
<div style={styles.leftDiv}>
    <h4>can fly : {this.state.canfly}</h4>
<img src={this.state.image} style={styles.imgCss}></img>
<Button variant="contained" size="medium" color="primary" style={styles.btnCss} 
onClick={() =>this.tickImg()} >
          Next
        </Button>

</div>
<Divider orientation="vertical" />
<div>
<img src="/girl.png" style={styles.imgCss}/>
<img src="/boy.png" style={styles.imgCss}/>
</div>

</div>




        {/* <div>
        <Button variant="contained" size="medium" color="primary" style={styles.btnCss} 
onClick={() =>this.tickImg()} >
          Next
        </Button>
<h4>can fly: {this.state.canfly}</h4>
        <img src={this.state.image} style={styles.imgCss}></img>
      </div>
      <div style={styles.container}>

      <div>
          <img src="/girl.png" style={styles.imgCss}/>
          <span>{this.state.girlans}</span>
<span>{this.state.canfly === this.state.girlans  ? "good" : "out"}</span>
          </div>

      <div>
      <img src="/boy.png" style={styles.imgCss}/>
      <span>{this.state.boyans}</span>
<span>{this.state.canfly === this.state.boyans  ? "good" :"out"}</span>

      </div>
      
      </div> */}
      </>
    :null}






            </div>
        )

        }
}
export default Home;
