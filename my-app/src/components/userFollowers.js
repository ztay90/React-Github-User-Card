import React from "react";
import axios from "axios";

class userFollowers extends React.Component {
  constructor() {
    super()
    this.state = {
      followerdata: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/ztay90/followers`)
      .then(res => {
        this.setState({
          followerdata: res.data
        })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="follower-container">
        {this.state.followerdata.map (follower => (
          <div className='card' key={follower.id}>
            <img src={follower.avatar_url} />
            <h2>{follower.login}</h2>
            <p>Github Url: <a href={follower.url}>{follower.html_url}</a></p>
          </div>
        ))}
      </div>
    )
  }
}

export default userFollowers
