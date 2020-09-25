import React from 'react';
import { connect } from 'react-redux';

import ReceiptItem from './../receipt-item/receipt-item';
class Receipt extends React.Component {
    render() {
        return <div>
            <h3>Your receipt</h3>
            <div>{this.renderReceipt(this.props.list)}</div>
        </div>

    }
    renderReceipt = (list = []) => {
        if (list.length){
            return list.map(item => <ReceiptItem key={item.id} item={item} />)
        }
        return <div>choose some data</div>
    }
}

const getState = state => {
    return { list: state.orderList, total: state.total }
}

export default connect(getState)(Receipt);