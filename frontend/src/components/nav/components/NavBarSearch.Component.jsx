import {AiOutlineSearch} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const NavBarSearchComponent = () => {
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log('search state ->', searchValue);
    // }, [searchValue])

    const onSearch = () => {
        if (searchValue) {
            navigate(`/shop/${searchValue.replaceAll(' ', '-')}`)
        }
    }
    return (
        <>
            <AiOutlineSearch onClick={() => setShowSearchInput(!showSearchInput)}/>
            {
                showSearchInput ?
                    <div style={{position: "absolute", top: "100px"}}>
                        <input type="text" onChange={event => setSearchValue(event.target.value)}/>
                        <button onClick={() => onSearch()}>search</button>
                    </div> : null
            }

        </>
    )
}

export default NavBarSearchComponent