import React, { Component } from 'react';

class Graph extends Component {
  constructor(props){
    super(props);
    this.initCanvas = this.initCanvas.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawLinesStats = this.drawLinesStats.bind(this);
    this.drawTextLabel = this.drawTextLabel.bind(this);
    this.drawPoints = this.drawPoints.bind(this);
    this.drawVerticalLines = this.drawVerticalLines.bind(this);
    this.proportionalXPosition = this.proportionalXPosition.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.initCanvasWithDimensions = this.initCanvasWithDimensions.bind(this);
    this.setCanvas = this.setCanvas.bind(this);
    this.graphStyles = {
      graph : {
        position: 'relative'
      },
      canvas : {
        width: '100%'
      },
      tagHover : {
        position: 'absolute',
        background: '#FFF',
        padding: '3px 8px',
        margin:'0 8px',
        borderRadius: '3px',
        boxShadow: '0 7px 14px 0 rgba(50, 50, 93, .1), 0 3px 6px 0 rgba(0, 0, 0, .07)',
        userSelect: 'none',
        cursor: 'default'
      },
      tagItem : {
        padding: '1px 0',
        fontSize: '.7em',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      tagItemDot : {
        borderRadius : '4px',
        height : '6px',
        width : '6px',
        marginRight : '8px'
      },
      tagItemLabel : {
        display: 'flex',
        alignItems: 'center',
        marginRight: '8px',
        letterSpacing: '.001em',
        color: '#858585'
      },
      tagItemValue : {
        color: '#202020'
      }
    }
    this.state = {
      context : null,
      height : null,
      width : null,
      mouseX : null,
      mouseY : null,
      activeSegment : null,
      mouseInPerimeter : false,
      tagLabelStyle : {},
      tagLabelDatas : []
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.initCanvasWithDimensions);
    this.initCanvasWithDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.initCanvasWithDimensions);
  }
  initCanvasWithDimensions(){
    let canvas = this.refs.canvas;
    let context = canvas.getContext('2d');
    let graphContainer = this.refs.graphContainer;
    let setupInterval = setInterval(()=> {
      if (graphContainer.offsetHeight === this.props.height) {
        clearInterval(setupInterval);
        this.initCanvas(graphContainer, canvas, context);
      }
    }, 10);
  }
  proportionalXPosition(xPosition, xPositions){
    let availaibleHeight = this.state.height - 35;
    let proportionalFactor = (Math.max(...xPositions) - Math.min(...xPositions)) / availaibleHeight || 1;
    let calculatedPosition = availaibleHeight - ((xPosition / proportionalFactor) - (Math.min(...xPositions) / proportionalFactor) -10);
    return calculatedPosition;
  }
  drawTextLabel(labels = []){
    let segmentWidth = this.state.width / (labels.length - 1);
    let ctx = this.state.context;
    ctx.font = "11px Roboto";
    ctx.fillStyle = this.props.labelsColor;
    for (let i = 0; i < (labels.length); i++) {
      // eslint-disable-next-line
      if (i == 0) {
        ctx.textAlign = "left";
      }
      // eslint-disable-next-line
      else if (i == labels.length - 1) {
        ctx.textAlign = "right";
      }
      else {
        ctx.textAlign = "center";
      }
      ctx.fillText(labels[i], i * segmentWidth, this.state.height - 1);
    }
  }
  drawVerticalLines(stats){
    let ctx = this.state.context;
    let segmentWidth = this.state.width / (stats.length - 1);
    for (let i = 0; i < (stats.length); i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = (i === this.state.activeSegment && this.state.mouseInPerimeter) ? this.props.horizontalSegmentHoverColor : this.props.horizontalSegmentColor;
      ctx.moveTo(segmentWidth * i, this.state.height - 15);
      ctx.lineTo(segmentWidth * i,0);
      ctx.stroke();
    }
  }
  drawPoints(stats, color){
    let ctx = this.state.context;
    let segmentWidth = this.state.width / (stats.length - 1);
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(segmentWidth * this.state.activeSegment, this.proportionalXPosition(stats[this.state.activeSegment], stats), 3, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  drawLine(stats, color){
    let ctx = this.state.context;
    let segmentWidth = this.state.width / (stats.length - 1);
    ctx.beginPath();
    ctx.moveTo(0, this.proportionalXPosition(stats[0], stats));
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    for (let i = 0; i < stats.length; i++) {
      ctx.lineTo(segmentWidth * i,this.proportionalXPosition(stats[i], stats));
    }
    ctx.stroke();
  }
  drawPolygon(stats, color){
    let ctx = this.state.context;
    let segmentWidth = this.state.width / (stats.length - 1);
    let grd = ctx.createLinearGradient(0, this.state.height, 0, 0);
    grd.addColorStop(1, color.start);
    grd.addColorStop(0, color.stop);
    ctx.beginPath();
    ctx.moveTo(0, this.state.height);
    for (let i = 0; i < stats.length; i++) {
      ctx.lineTo(segmentWidth * i,this.proportionalXPosition(stats[i], stats));
    }
    ctx.lineTo(this.state.width,this.state.height);
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();
  }
  drawLinesStats(statsList){
    for (let i = 0; i < statsList.length; i++) {
      this.drawPolygon(statsList[i].datas, this.props.linesColors[i].gradient);
      this.drawLine(statsList[i].datas, this.props.linesColors[i].border);
    }
    this.drawVerticalLines(statsList[0].datas);
    if (this.state.mouseInPerimeter) {
      for (let i = 0; i < statsList.length; i++) {
        this.drawPoints(statsList[i].datas, this.props.linesColors[i].border);
      }
    }
  }
  handleMouseMove(e){
    let mouseX = e.nativeEvent.offsetX;
    let mouseY = e.nativeEvent.offsetY;
    let stats = (this.props.graphs) ? this.props.graphs : [];
    let segmentWidth = this.state.width / (stats[0].datas.length - 1);
    for (var i = 0; i < stats[0].datas.length; i++) {
      if ((mouseX > i*segmentWidth -(segmentWidth/2)) && (mouseX < i*segmentWidth + (segmentWidth/2))) {
        // eslint-disable-next-line
        let tagLabelDatas = stats.map(stat=>({
          label : stat.label,
          color : stat.labelColor,
          value : stat.datas[i]
        }));
        let tagLabelStyle = (mouseX >= (this.state.width/2)) ? {
          right : this.state.width - (mouseX - 5)
        } : {
          left : mouseX + 5
        };
        tagLabelStyle.top = mouseY + 5;
        this.setState({activeSegment:i, tagLabelDatas, tagLabelStyle});
      }
    }
    this.setState({mouseX, mouseY});
  }
  handleMouseEnter(){
    this.setState({mouseInPerimeter:true});
  }
  handleMouseLeave(){
    this.setState({mouseInPerimeter:false});
  }
  initCanvas(graphContainer, canvas, context){
    canvas.width = graphContainer.offsetWidth * 2;
    canvas.height = graphContainer.offsetHeight * 2;
    canvas.style.width = graphContainer.offsetWidth + 'px';
    canvas.style.height = graphContainer.offsetHeight + 'px';
    context.imageSmoothingQuality = "high";
    context.scale(2,2);
    this.setState({context, height : graphContainer.offsetHeight, width: graphContainer.offsetWidth});
  }
  setCanvas(statsList, labels){
    this.state.context.clearRect(0, 0, this.state.width, this.state.height);
    this.drawLinesStats(statsList);
    this.drawTextLabel(labels);
  }
  render() {
    if (this.state.context && this.props.graphs) {
      this.setCanvas(this.props.graphs, this.props.labels);
    }
    return (
      <div
        id="Graph"
        ref="graphContainer"
        style={{...this.graphStyles.graph, height:this.props.height+'px'}}
        onMouseEnter={()=>this.handleMouseEnter()}
        onMouseLeave={()=>this.handleMouseLeave()}>
        {(this.state.mouseInPerimeter) && (
          <div style={{...this.state.tagLabelStyle, ...this.graphStyles.tagHover}}>
            {this.state.tagLabelDatas.map((tagLabel, index)=>(
              <div key={index} style={this.graphStyles.tagItem}>
                <span style={this.graphStyles.tagItemLabel}>
                  <div style={{...this.graphStyles.tagItemDot, backgroundColor : tagLabel.color}}></div>{tagLabel.label}
                </span>
                <span style={this.graphStyles.tagItemValue}>{tagLabel.value}</span>
              </div>
            ))}
          </div>
        )}
        <canvas
          ref="canvas"
          style={this.graphStyles.canvas}
          onMouseMove={(e)=>this.handleMouseMove(e)}
          />
      </div>
    );
  }
}

export default Graph;
