import * as React from 'react';
import './style.css';
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane, UncontrolledAlert
} from "reactstrap";
import {useState} from "react";

const Home = () =>{
  const [activeTab, setActiveTab] = useState(0);
  const [userName, setUserName] = useState('');
  const [selectedSource, setSelectedSource] = useState([])
  const [activeSection, setActiveSection] = useState(false);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const handleSourceChange = e => {
    if(e.target.checked) {
      const data = [...selectedSource];
      data.push(e.target.value)
      setSelectedSource(data);
    } else {
      const data = [...selectedSource];
      data.splice(data.indexOf(e.target.value),1)
      setSelectedSource(data)
    }

  }
  return <div>
    <Nav tabs>
      <NavItem>
        <NavLink
          className={{ active: activeTab === '1' }}
          onClick={() => { toggle('1'); }}
        >
          Manage Sources
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={{ active: activeTab === '2' }}
          onClick={() => { toggle('2'); }}
        >
          Manage Team
        </NavLink>
      </NavItem>
    </Nav>

    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <h4>Select Source</h4>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <Form>
              <FormGroup check >
                <Label check>
                  <Input type="checkbox" value="facebook" onClick={ e => handleSourceChange(e) }/> Facebook
                </Label>
              </FormGroup>
              <FormGroup check >
                <Label check>
                  <Input type="checkbox" value="twitter" onClick={ e => handleSourceChange(e) }/> Twitter
                </Label>
              </FormGroup>

              <FormGroup check >
                <Label check>
                  <Input type="checkbox" value="youtube" onClick={ e => handleSourceChange(e) } /> Youtube
                </Label>
              </FormGroup>

              <FormGroup check >
                <Label check>
                  <Input type="checkbox" value="redhet" onClick={ e => handleSourceChange(e) } /> Reduhet
                </Label>
              </FormGroup>
            </Form>
          </Col>
          <Col md="2">
            { selectedSource.length ? <Button outline color="primary" onClick={()=> setActiveSection(true)}>></Button> : ''}
          </Col>
          <Col md="5">
            { selectedSource.length && activeSection ? <Row>
              <Col md="12">
                <h3>Configure Source</h3>
              </Col>
              <Card body>
              {selectedSource.includes('facebook') && <Row>
                    <Col md="12">
                      facebook
                    </Col>
                    <Col>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="username">User Name</Label>
                            <Input type="username" name="username" onChange={ (e) => setUserName(e.target.value)} placeholder="user name" />
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <UncontrolledAlert color="secondary" fade={false}>
                            item1
                          </UncontrolledAlert>
                        </Col>
                        <Col md={3}>
                          <UncontrolledAlert color="secondary" fade={false}>
                            item2
                          </UncontrolledAlert>
                        </Col>
                      </Row>
                    </Col>
                </Row>}
                {selectedSource.includes('youtube') && <Row>
                  <Col md="12">
                    Youtube
                  </Col>
                  <Col>
                    <Row form>
                      <Col md={6}>
                        <Alert color="danger" fade={false}>Youtube</Alert>
                      </Col>
                    </Row>
                  </Col>
                </Row>}
              </Card>
            </Row> : '' }
          </Col>
          <Col md="3">
            {userName.length && selectedSource.length ? <Button color="primary" >start ingestion</Button> : ''}
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        Tab2
      </TabPane>
    </TabContent>
  </div>
}

export default Home;
