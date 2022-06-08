
# react-xlsx-export

External libraries such as

- file-saver: "^2.0.5"
- xlsx: "^ 0.18.5"

are used as dependencies.


## Installation

Install React XLXS Export 

with npm

```bash
  npm install react-xlsx-export
```

with yarn

```bash
  yarn add react-xlsx-export
```    
## Usage

```javascript
import { useState, useEffect } from "react";
import ReactXlsxExport from "react-xlsx-export";

function App() {

	const [customerData, setCustomerData]: any = useState([]);

	const customers = () => {
		let custs = [];
		for (let i = 0; i <= 25; i++) {
			custs.push({
				firstName: `first${i}`,
				lastName: `last${i}`,
				email: `abc${i}@gmail.com`,
				address: `000${i} street city, ST`,
				zipcode: `0000${i}`,
			});
		}
		setCustomerData(custs);
	};

	useEffect(() => {
		customers();
	}, []);

	return (
		<div>
			<ReactXlsxExport data={customerData} filename="customers" />
		</div>
	);
}
```


## Author

- [@htetarkarhlaing](https://www.github.com/htetarkarhlaing)

