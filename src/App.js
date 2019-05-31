import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { connect } from "react-redux";

import './App.css';
import {
    getProjects,
    getSingleProject,
    addProject,
    updateProject,
    deleteProject
  } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const projects = this.props.projectsList.map(project => {
      return <div key={project.id}>
                <div><h4>Project Name:</h4> {project.name}</div>
                <div><h4>Description:</h4> {project.description}</div>
            </div>
    })
    return (
      <div className="App">
        {projects}
      </div>
    );
  }
}

const mapStateToProps = state  => ({
  projectsList: state.projectsList,
  singleProject: state.singleProject
})

export default connect( mapStateToProps,
{
  getProjects,
  getSingleProject,
  addProject,
  updateProject,
  deleteProject
})(App);
