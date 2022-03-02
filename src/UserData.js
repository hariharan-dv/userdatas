import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserData = () => {
    const [data, setData] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://randomuser.me/api/');
            if (response.data) {
                setData(response.data.results)
                // console.log(response.data.results)
            }
        }
        getData()
    }, [refresh])

    return (
        data && data?.length > 0 ?
            <>
                <div>
                    {data.map((user, index) => (
                        <>
                            <div className='container' key={index} >
                                <div>
                                    {/* User Name */}
                                    <fieldset title='Name'>
                                        <legend>
                                            Name
                                        </legend>
                                        {user.name.title}. {user.name.first} {user.name.last}
                                    </fieldset>
                                    {/* User Email */}
                                    <fieldset title='Email'>
                                        <legend>
                                            Email
                                        </legend>
                                        {user.email}
                                    </fieldset>
                                    {/* Refresh Button */}
                                    <button className='btn' title='Refresh' onClick={() => setRefresh(!refresh)}>
                                        <label>
                                            Refresh &#10227;
                                        </label>
                                    </button>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </>
            :
            <div className='container'>
                {/* No data found */}
                <div className='error'>
                    <strong>No data found</strong>
                </div>
            </div>
    )


}

export default UserData