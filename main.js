/**
 * Created by Akira on 9/25/16.
 */



/** Create classes **/

var Menu = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});

            switch (index) {
                case 0:  return window.open('http://www.google.com');
                case 1: return window.open('http://www.yahoo.com');
                case 2:  return window.open('http://www.politico.com');
                case 3:  return window.open('http://www.mediaite.com');
                default:      window.open('http://www.facebook.com');
            }
    },

    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:

                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

                }) }

                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
});


/* Rendering React */


// Render the menu component on the page, and pass an array with menu options

ReactDOM.render(
    <Menu items={ ['Google', 'Yahoo', 'Politico', 'Mediaite'] } />,
    document.getElementById('container')
);
