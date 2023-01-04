import React from 'react'
import Table from '../component/Table'

function PageTwo() {
    const columns = [
        { field: 'product', header: 'product' },
        { field: 'lastYearSale', header: 'lastYearSale' },
        { field: 'thisYearSale', header: 'thisYearSale' },
        { field: 'lastYearProfit', header: 'lastYearProfit' },
    ];
    const sales = [
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212 }
    ];
    return (
        <div className='table-Contianer'>
            <Table data={sales} columns={columns} sortable />
        </div>
    )
}

export default PageTwo