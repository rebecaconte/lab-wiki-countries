import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import CountryDetail from './CountryDetail'

class CountriesList extends Component {

    state = {
        countryList: []
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                console.log(response)
                this.setState({
                    countryList: response.data
                })

            })
            .catch((e) => {
                console.log('Data not Fetched: ' , e)
            })
    }


    render() {
        const {countryList} = this.state
        return (
            <div style={{display: 'flex'}}>
                <div>
                {
                    countryList.map((country, index) => {
                        return <div key={index}>
                            <img style={{width: "20px"}} src={country.flag} />
                                <Link to={`/country/${country.alpha3Code}`}> {country.name}</Link>
                               </div>
                    })
                }
                </div>
                <Route path="/country/:code" component={CountryDetail} />
            </div>
        )
    }
}


export default CountriesList;