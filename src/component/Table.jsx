
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState } from 'react'
import { FilterMatchMode, PrimeIcons } from 'primereact/api'
import { InputText } from 'primereact/inputtext';

const Table = ({ data = [], columns = [], sortable, paginator, filter }) => {
    const fields = columns.reduce((acc, crr) => {
        return acc = Object.assign(acc, { [crr.field]: { value: null } })
    }, {})
    console.log(fields)

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        ...fields
    })

    const Filterelement = (field) => {

        return (<InputText
            onInput={(e) => setFilters({
                ...filters,
                [field]:
                {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            })} />)
    }
    const matchModes = [
        { label: 'Contains', value: FilterMatchMode.CONTAINS },
    ];
    const TableColumns = columns.map((e, i) => {
        return <Column key={i}
            reset
            field={e.field}
            header={e.header}
            sortable={sortable}
            filter
            filterMatchModeOptions={matchModes}
            filterElement={() => Filterelement(e.field)}
        />
    })
    const refresh = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            ...fields
        })
    }

    return (<>
        {filter && <InputText
            placeholder='search . . .'
            onInput={(e) => setFilters({
                global:
                {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            })}
        />}
        <button onClick={refresh}><span className='pi pi-refresh'></span></button>
        <DataTable
            value={data}
            responsiveLayout='scroll'
            filters={filter && filters}
            paginator={paginator}
            rows={5}
            rowsPerPageOptions={[5, 10, 15]}
        >
            {TableColumns}
        </DataTable>
    </>
    )
}

export default Table