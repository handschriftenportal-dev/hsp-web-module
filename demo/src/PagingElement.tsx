import React from 'react'
import Pagination, {
  PaginationRenderItemParams,
} from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

export function PagingElement() {
  const renderItem = (item: PaginationRenderItemParams) => {
    return <PaginationItem {...item} component={'a'} />
  }

  return (
    <>
      <h4>Paging</h4>
      <code>@material-ui/lab/Pagination @material-ui/lab/PaginationItem</code>
      <Pagination count={5} renderItem={renderItem} />
    </>
  )
}
