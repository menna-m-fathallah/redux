import React from 'react';
import { staticData } from './static-items';
import GalleryItem from './../gallery-item/gallery-item';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
class Gallery extends React.Component {
    getItems = () => {
        return staticData.map(storeItem => <GalleryItem key={storeItem.id} storeItem={storeItem} />)
    }

    render() {
        return (
            <Row>
                {this.getItems()}
            </Row>
        );
    }
}

export default connect(null)(Gallery);