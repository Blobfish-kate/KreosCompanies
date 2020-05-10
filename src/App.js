import React from 'react'
import axios from 'axios'
import {MDBDataTable} from 'mdbreact'

import DatatablePage from './components/DatatablePage'
import Header from './components/Header'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			investments: []
		}
		this.stripHTML = this.stripHTML.bind(this)
	}

	stripHTML(str){
	    let el = document.createElement("div");
	    el.innerHTML = str;
	    return el.textContent;
	 };

	componentWillMount() {
		axios.get('https://kreos.herokuapp.com/')
			.then(res => {
				let investmentArr = res.data
				this.setState({
					investments: [...this.state.investments, ...investmentArr]
				})
			})
	}

	render() {
		const geography = {
			"6":"Sweden", 
			"15":"Austria", 
			"16":"Belgium", 
			"18":"Netherlands", 
			"19":"Finland", 
			"20":"France", 
			"21":"Germany", 
			"22":"Ireland", 
			"23":"Israel", 
			"24":"Netherlands", 
			"25":"Spain", 
			"26":"Switzerland", 
			"27":"United Kingdom", 
			"28":"USA", 
			"31":"Italy", 
			"33":"Poland"
		};

		const industry = {
			"8":"Cleantech", 
			"9":"Communications", 
			"10":"Consumer", 
			"11":"Life Sciences", 
			"12":"Other", 
			"13":"Semiconductor/Hardware", 
			"14":"Software", 
			"56":"Fintech"
    };
    
    const data = {
      columns: [
        {
          label: 'Company',
          field: 'company',
          sort: 'asc',
          width: '200'
        },
        {
          label: 'Description',
          field: 'description',
          sort: 'asc',
          width: '250'
        },
        {
          label: 'Country',
          field: 'country',
          sort: 'asc',
          width: '100'
        }, 
        {
          label: 'Category',
          field: 'category',
          sort: 'asc',
          width: '100'
        },
        {
          label: 'Exited',
          field: 'exited',
          sort: 'asc',
          width: '50'
        },
        {
          label: 'Website',
          field: 'website',
          sort: 'asc',
          width: '100'
        },         
      ],
      rows: this.state.investments.map(item => ({
        company: item.post_title,
        description: this.stripHTML(item.post_content),
        country: geography[item.categories.filter(category => geography[category])],
        category: industry[item.categories.filter(category => industry[category])],
        exited: item.exited ? 'true' : 'false',
        website: item.url
      }))
    }

		return (
      <div>
        <Header />
        <DatatablePage data={data}/>
      </div>
		)
	}
}

export default App
