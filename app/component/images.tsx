import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Image from 'next/image';


function Images(props: any) {
    const {data} = props
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length/itemsPerPage));
    },[itemOffset, itemsPerPage,data]);

    const handlePageClick =(event:any)=>{
       const  newOffset = (
        event.selected*itemsPerPage) % data.length;
       console.log(`User required page number ${event.selected}, which is offset ${newOffset}`);
       setItemOffset(newOffset)
    }
    return (
        <>
          <div className="flex items-center justify-center">
            <div className='grid grid-cols-3'>
            {
                currentItems.map((image:any)=>{
                    return(
                        <div className='flex flex-col p-3' key={image.id}>
                          <div>
                          <img 
                            src ={image.url} 
                            alt = {image.title} 
                            width={150}
                            height={150}
                            className='rounded-full'
                          />
                          </div> 
                          
                        </div>
                    )
                })
            }
            </div>
            
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='flex items-center justify-center bold-16 md:bold-20 gap-2 ml-3'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
          />
        </>
      );
}

export default Images  