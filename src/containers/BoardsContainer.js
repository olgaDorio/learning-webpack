import { connect } from 'react-redux'
import Boards from '../components/Boards/Boards'

const mapStateToProps = (state, ownProps) => 
{
  return { lists: state.lists }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id, name) => dispatch({ type: 'ADD_BOARD', id, name })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)
