import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Modulo {activeModule.title} </strong>
    <span>Aula {activeLesson.title}</span>
  </div>
);

const mapStateToProps = state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
});

export default connect(mapStateToProps)(Video);
