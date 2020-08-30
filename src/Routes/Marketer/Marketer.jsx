import * as React from 'react';
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchPosts, fetchPostsComment} from "../../redux/post/postServices";
import _ from 'lodash';
import {Col, Container, FormGroup, Input, Label, Row, Table} from "reactstrap";
import {Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

const Marketer = () =>{
  const [selectedUser, setSelectedUser] = useState('');

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostsComment());
  },[dispatch])

  // Redux State
  const userData = useSelector((state) => state.posts.posts);
  const groupUser = _.groupBy(userData, (o) => o.username);
  const uniqueUser = Object.keys(groupUser)

  const commentData = useSelector((state) => state.posts.postscommnet);

  let commentCountPostwise = [];

  commentData && commentData.filter( comment => comment.username === selectedUser).forEach((cData) => {
    commentCountPostwise.push({name: cData.post_id, commentCount: commentData.filter( comment => comment.post_id === cData.post_id).length })
  })

  // this gives an object with dates as keys
  const groups = commentData.filter( comment => comment.username === selectedUser).reduce((groups, game) => {
    const date = game.created_datetime.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

// Edit: to add it in the array format instead
  const postCountArrays = Object.keys(groups).map((date) => {
    return {
      date,
      postcount: groups[date].length
    };
  });

  return <Container>
    <Row form>
      <Col md={4}>
        <FormGroup>
          <Label for="exampleSelectMulti">Select User</Label>
            <Input type="select" name="selectMulti" id="exampleSelectMulti"  onChange={user => setSelectedUser(user.target.value)} >
              <option >Select User</option>
              {uniqueUser.map((user) => <option value={user}>{user}</option>)}
            </Input>
        </FormGroup>
      </Col>
    </Row>
    {
      selectedUser && <Row>
        <Table>
          <thead>
          <tr>
            <th>Post Id</th>
            <th>Post</th>
            <th>Post Likes</th>
            <th>Share count</th>
          </tr>
          </thead>
          <tbody>
          {groupUser[selectedUser] && groupUser[selectedUser].map(user =><tr>
            <th> {user.post_id}</th>
            <td>{user.post}</td>
            <td>{user.post_likes}</td>
            <td>{user.share_count}</td>
          </tr> )}

          </tbody>
        </Table>

        <BarChart
          width={500}
          height={300}
          data={commentCountPostwise}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Bar dataKey="commentCount" fill="#8884d8" />
        </BarChart>

        <LineChart
          width={500}
          height={300}
          data={postCountArrays}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monotone" dataKey="postcount" stroke="#8884d8"  />
        </LineChart>
      </Row>
    }
  </Container>
}

export default Marketer;
