import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'

class CountryDetail extends Component {

    state = {
        countryDetail: null,
        countryByBorder: null
    }
    /*
    getCountry = (countryBorder) => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryBorder}/`)
            .then((response) => {
                const {name, borders} = response.data
                let countryName = {
                    name: name,
                    borders: borders
                }

                this.setState({
                    countryByBorder: name
                })               
            })
    } */

    getData = () => {
         let countryCode = this.props.match.params.code
         //console.log(this.props.match)
         axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}/`)
            .then((response) => {
                const {flag, name, capital, area, borders } = response.data
                let detail = {
                    flag: flag,
                    name: name,
                    capital: capital,
                    area: area,
                    borders: borders
                }

                this.setState({
                    countryDetail: detail
                })
    
               //console.log(this.state.countryDetail)
            })
            
    }

    componentDidMount(){
        //console.log('Did Mount')
        this.getData()
    }

    componentDidUpdate(){

        let stateCode = this.state.countryDetail?.code
        let propsCode = this.props.match?.params?.code
        if (stateCode !== propsCode) {
            this.getData()
        }
    }

    render() {
        const {countryDetail} = this.state
        //const {countryByBorder} = this.state

        if (!countryDetail) {
            return <h1>Doing some magic...</h1>
        }

        return (
            <div>
                <img style={{width: "40px"}} src={countryDetail.flag} />
                <h1> {countryDetail.name} </h1> 
                <h3>Capital {countryDetail.capital}</h3>
                <hr />
                <h3>Area {countryDetail.area}</h3>
                <hr />
                <h3>
                    Borders 
                    <ul>
                    { 
                        countryDetail.borders.map((borders, index) => {
                            return <li>{borders} </li>
                        })        
                    }
                    </ul>
                </h3>  
            </div>       
        )
    }
}


export default CountryDetail;