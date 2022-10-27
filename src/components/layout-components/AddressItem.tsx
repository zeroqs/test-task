import React from 'react';
import {IAddressItem} from '../../models/models'

const AddressItem = ({value} : IAddressItem) => {
    return (
        <li>
            {value}
        </li>
    );
};

export default AddressItem;
