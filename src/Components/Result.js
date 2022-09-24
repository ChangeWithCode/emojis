import { Data } from '../Data';
import { useEffect, useState } from 'react';
import Search from './Search';
import ScrollToTop from "react-scroll-to-top";
import { Triangle  } from  'react-loader-spinner'
import toast from 'react-hot-toast';

const Result = () => {


    const [limit , setLimit] = useState(8);
    const [data , setData] = useState(Data.Emojis.slice(0,limit));
    const [dataTemp , setDataTmp] = useState(Data.Emojis.slice(0,limit));
    const [search , setSearch] = useState("");
    const [loader , setLoader] = useState(true);


    const reset = () =>
    {
        setSearch("");
        setData(Data.Emojis.slice(0,8));
    }

    
const updateData = () =>
{
    setLimit(limit+8);
    setData(Data.Emojis.slice(0,limit));
}
    
    const handleSearch = (event) => {

        if(event.target.value === "\\")
        {
            toast.error('Not a valid character',
  {
    icon: '😡',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
           
        }
        else
        {
            setSearch(event.target.value);
        }
        
      };

      const filterEmojis = () =>
      {
        setDataTmp(Data.Emojis);
        let filter = dataTemp.filter( obj => obj.keywords.match(search));
        setData(filter);
      }

      useEffect(() => {
        updateData();
        setTimeout(() => {

            setLoader(false);
            
        }, 2000);
      }, [])
      

      useEffect(() => {

        if (search === "")
        {
            reset();
        }

        else{
        filterEmojis();
        }
      }, [search])
      


    return ( 
<>

<ScrollToTop className='scroll' color="white" />


{loader ? (
    <Triangle
            visible={true}
            height="570"
            width="auto"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            color="#212529"
          />

          ) : (
            <>
<Search handleSearch = {handleSearch} search = {search}></Search>
{data.length === 0 ? (

<>
    <h4 className='mt-2'>No Results Found 😞</h4>
    <div className='mt-5 mb-2'><button type="button" class="btn btn-dark" id='btn'
onClick={(e) =>
{   
    e.preventDefault();
    reset();
}}
>Reset</button></div>
</>
) : (
<div class="container text-center ">
  <div class="row mt-5">
  {data && data.map((item) => {
return (
    <div class="col-3 mb-2"
    onClick={() => {navigator.clipboard.writeText(item.symbol)
        toast('Copied',
        {
          icon: `${item.symbol}`,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        
    
    }}
    >
    <div class="card bg-dark">
  <div class="card-body">
    <h1 class="card-title text-white ">{item.symbol}</h1>
  </div>
</div>
    </div>
    );
})}
<div className='mt-5 mb-2' ><button type="button" class="btn btn-dark" id='btn'
onClick={(e) =>
{   
    e.preventDefault();
    updateData();
}}
>Show More</button></div>

  </div>
</div>
 )}
 </>
 )}
</>

     );
}
 
export default Result;

