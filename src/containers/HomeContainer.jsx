import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getUserById } from '../actions/getUserByIdActions'
import Home from '../presentationals/Home'

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    route: PropTypes.object,
    navigator: PropTypes.object,
    getUserByIdState: PropTypes.object,
  }

  componentDidMount() {
    this.props.dispatch(getUserById(0))
  }

  render() {
    const { dispatch, ...other } = this.props

    return (
      <Home {...other} />
    )
  }
}

export default connect((state) => ({
  getUserByIdState: state.getUserByIdState,
}))(HomeContainer)
