import React from 'react'
import Table from '../component/Table'

function PageOne() {
    const columns = [
        { field: 'product', header: 'product' },
        { field: 'lastYearSale', header: 'lastYearSale' },
        { field: 'thisYearSale', header: 'thisYearSale' },
        { field: 'lastYearProfit', header: 'lastYearProfit' },
        { field: 'thisYearProfit', header: 'thisYearProfit' },
        { field: 'margin', header: 'margin' }
    ];
    const sales = [
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342, margin: 399 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122, margin: 399 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500, margin: 399 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323, margin: 399 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332, margin: 399 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005, margin: 399 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214, margin: 399 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322, margin: 399 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232, margin: 399 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533, margin: 399 }
    ];

    return (
        <div className=' table-Contianer'>
            <Table columns={columns} data={sales} paginator filter />
        </div>
    )
}

export default PageOne