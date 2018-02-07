# mk-react-graph
Create Wonderfull, lightweight, and responsive graph with react.


## How to install

    yarn add mk-react-graph
or

    npm install --save mk-react-graph

## Features

 - multilines graph with labels
 - custom colors
 - canvas HD
 - responsive
 - mouse hover with data

## How to use

    import Graph from 'mk-react-graph'
    ...
    render(){
	    return (
		    <Graph
	        height={220}
		      linesColors={[
		        {
		          border : '#E5C7FF',
		          gradient : {start:'rgba(156, 92, 232, 0.5)',stop:'rgba(110,92,231,0)'}
		        },
		        {
		          border : '#FF9F00',
		          gradient : {start:'rgba(232,151,92,0.5)',stop:'rgba(110,92,231,0)'}
		        }
		      ]}
		      labelsColor="rgba(255, 255, 255, 0.7)"
		      horizontalSegmentColor="rgba(255, 255, 255, 0.09)"
		      horizontalSegmentHoverColor="rgba(255, 255, 255, 0.7)"
	          graphs={[
		        {
		          datas : [120, 56, 67, 198],
		          label : "registred",
		          labelColor : "#E5C7FF"
		        },
		        {
		          datas : [61, 38, 91, 111],
		          label : "confirmed",
		          labelColor : "#FF9F00"
		        }
		      ]}
	        labels={['12/01', '13/01', '14/01', '15/01']}
	      />
	    )
    }
    ...
