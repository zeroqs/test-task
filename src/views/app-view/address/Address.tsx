import React from 'react';
import {SearchWhiteSVG} from "../../../assets/svg/icon";
import {getAddress} from "../../../fetch/fetch";
import {IAddressItem} from "../../../models/models";
import AddressItem from "../../../components/layout-components/AddressItem";


const Address = () => {
    const [state, setState]  = React.useState('')
    const [users, setUsers]  = React.useState([])

    async function fetch() {
        setUsers(await getAddress(state))

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (state.length >=3 ) {
            fetch()
        }
        else alert('Минимум 3 символа')
        e.preventDefault()
    }


    return (
        <>
            <section className="address-header">
                <h1>Поиск адресов</h1>
                <h2>Введите интересующий вас адрес</h2>
            </section>
            <form onSubmit={(e) => handleSubmit(e)} role="search" className="search-form">
                <input
                    value={state}
                    onChange={(e) => handleChange(e)}
                    type="search"
                    placeholder = "Введите интересующий вас адрес"
                    min="3"
                />
                <button type='submit' className="search-button">
                    <SearchWhiteSVG/>
                    Search
                </button>
            </form>
                {
                    users.length ?
                        <ul id='element' className="address-list">
                        <h1>Адреса</h1>
                        {users.map((item :IAddressItem,i) => <AddressItem key={i} value={item.value} />)}
                    </ul> : <></>
                }
        </>
    );
};

export default Address;
