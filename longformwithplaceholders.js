import React from 'react'


class ShortForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        comments: [],
        isLoaded: false,
        isHidden: true,
      }
  }

    componentDidMount() {
      fetch('api url')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
      fetch('api url')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          comments: json,
        })
      });
    }


    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }


    renderTableData() {
      let {comments} = this.state;
          return this.state.items.map((item, index) => {
             const { date, title, description, link, printscreen, status } = item
             return id === 'active' ?
                <tr key={id}>
                   <td>{date}</td>
                   <td>{title}</td>
                   <td>{description} <br/>
                   <button onClick={this.toggleHidden.bind(this)} >
                   ...
                   </button>
                  {!this.state.isHidden && comments.slice(0,-1).map(comment =>
                    (<p key={comment.id}>{comment.title}
                      </p>))}
                  {comments.slice(-1).map(comment =>
                    (<p key={comment.id}>{comment.title}
                      </p>))}
                    </td>
                    <td>{link}</td>
                    <td>{printscreen}</td>
                    <td>{status}</td>
                  </tr>
           : null })
       }


       render() {
         let {isLoaded} = this.state;
         return !isLoaded ? <div>Loading...</div> :
             <div>
                <table id='items'>
                   <tbody>
                   <tr className="tableheader">
                     <td>data zgłoszenia</td>
                     <td>tytuł</td>
                     <td>opis</td>
                     <td>link</td>
                     <td>printscreen</td>
                     <td>status</td>
                   </tr>
                      {this.renderTableData()}
                   </tbody>
                </table>
             </div>

       }


    }


export default ShortForm;
