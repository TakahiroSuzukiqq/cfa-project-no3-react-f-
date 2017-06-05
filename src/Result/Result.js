import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  render() {
    return(
     <div>
    {/*   <h3>{this.props.end_message}</h3>
     <p>アンケート調査ご協力頂き誠にありがとうございました。</p>
      <p>このまま画面を閉じて終了して下さい。</p>  */}
     </div>

   )
  }
}

Results.propTypes = {
  end_message: PropTypes.string
}

Results.defaultProps = {
    end_message: 'Thnak you!'
}

export default Results;
