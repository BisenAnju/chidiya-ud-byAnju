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
        height:'200px',
        objectFit:"cover"
    },
    imgCss1:{
        height:'150px',
    },
    container:{
display:"flex",
justifyContent:"center",
alignItems:"center",
    },
    mainDiv:
    {display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center",height:"400px",width:"50%"},
    leftDiv:
    {width:"40%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},
    rightDiv:
    {
        width:"60%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column"
    },
    innerDiv:
    {display:"flex",alignItems:"center",border:"1px solid blue",padding:"5%",width:"70%",height:"70vh"}
}

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { image:"",start:false, canfly:"", 
      answer:["Yes","No","No","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes"],  
      girlAnswer:"",boyAnswer:"",
      gOut:false,
      bOut:false
    }
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
       var girlAnswer = this.state.answer[Math.floor(Math.random() * this.state.answer.length)];
          this.setState({ girlAnswer });
    }
    boyAnswer=()=>{
        var boyAnswer = this.state.answer[Math.floor(Math.random() * this.state.answer.length)];
           this.setState({ boyAnswer });
     }
      tickImg=()=> {
          var fileNames = [
              {img:"/01.jpg",fly:"Yes"},
              {img:"/02.jpg",fly:"Yes"},
              {img:"/03.jpg",fly:"Yes"},
              {img:"/04.jpg",fly:"Yes"},
              {img:"/05.jpg",fly:"Yes"},
              {img:"/06.jpg",fly:"Yes"},
              {img:"/07.jpg",fly:"Yes"},
              {img:"/08.jpg",fly:"Yes"},
              {img:"/09.jpg",fly:"Yes"},
              {img:"/10.jpg",fly:"Yes"},
              {img:"/11.jpg",fly:"Yes"},
              {img:"/12.jpg",fly:"Yes"},
              {img:"/130.jpg",fly:"No"},
              {img:"/131.jpg",fly:"No"},
              {img:"/132.jpg",fly:"No"},
              {img:"/134.jpg",fly:"No"},
              {img:"/121.jpg",fly:"No"},
              {img:"/135.jpg",fly:"No"},
              {img:"/129.jpg",fly:"No"}
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
    <h4>Can fly : {this.state.canfly}</h4>
<img src={this.state.image} style={styles.imgCss}></img>
<Button variant="contained" size="medium" color="primary" style={styles.btnCss} 
onClick={() =>this.tickImg()} >
          Next
        </Button>

</div>
<Divider orientation="vertical" />
<div style={styles.rightDiv}>


    <div style={{display:"flex",width   :"100%",justifyContent:"center"}}>
        <div style={{display:"flex",width:"60%",justifyContent:"center"}}>
<img src="/girl.png" style={styles.imgCss1}/></div>
<div style={{display:"flex",width:"40%",flexDirection:"column"}}>
<span>My answer : {this.state.girlAnswer}</span>

{this.state.canfly === this.state.girlAnswer  ?
<span style={{color:"green"}}>Good</span>
:<span style={{color:"red"}}>Out</span>}
</div>
</div>



<div style={{display:"flex",width   :"100%",justifyContent:"center"}}>
        <div style={{display:"flex",width:"60%",justifyContent:"center"}}>
<img src="/boy.png" style={styles.imgCss1}/></div>
<div style={{display:"flex",width:"40%",flexDirection:"column"}}>
<span>My answer : {this.state.boyAnswer}</span>
{this.state.canfly === this.state.boyAnswer  ?
<span style={{color:"green"}}>Good</span>
:<span style={{color:"red"}}>Out</span>}
</div>
</div>


</div>
</div>
      </>
    :null}
            </div>
        )

        }
}
export default Home;
