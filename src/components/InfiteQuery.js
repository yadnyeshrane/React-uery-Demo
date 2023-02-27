import axios from 'axios'
import React, { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
const fetchcolors=({ pageParam = 1 })=>{
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}
function InfiteQuery() {
    //getNextPageParam returns hasnextpage which is boolean value
    const{isLoading,isError,error,data,hasNextPage,fetchNextPage,isFetching,isFetchingNextPage}=useInfiniteQuery(['colors'],fetchcolors,{
        getNextPageParam:(_lastPage,pages)=>{
            if(pages.length<4){
                return pages.length+1;
            }
            else{
                return undefined;
            }
        }
    })
  return (
    <div>{data?.pages.map((group,i)=>{
        return(
            <Fragment key={i}>
              {group.data.map(color => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
        )
    })}
     <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
    
  )
}

export default InfiteQuery