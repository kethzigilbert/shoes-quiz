import { groupBy } from "lodash"
import { useMemo } from "react"



export const useShoes  = (shoes) => {
     
    const groupedShoesById  = useMemo(() => {
      const grouped =   groupBy(shoes, 'id')
    Object.keys(grouped)?.forEach(each=>{
        grouped[each]=grouped[each][0]
    })
    return grouped } ,[shoes])

    return{
        groupedShoesById
    }
}