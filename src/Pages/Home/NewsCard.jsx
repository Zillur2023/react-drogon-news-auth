import {  FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {category_id, rating, total_view, title, author, thumbnail_url, image_url, details, others_info, _id} = news
    return (
        <div className=" bg-base-100 p-4">
          <div className=' flex justify-between items-center p-5 bg-gray-200'>
          <div className='flex  items-center gap-5'>
                <div> <img className='w-[40px] h-[40px] rounded-full' src={author?.img}alt="" /> </div>
                <div>
                    <h4 className=' text-base font-semibold'> {author?.name} </h4>
                    <p> {author?.published_date} </p>
                </div>
            </div>
            <div className='flex gap-5'>
                <FaBookmark></FaBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
          </div>
            <h2 className="my-3 text-xl font-bold"> {title} </h2>
  <figure><img src={ image_url} alt="Shoes" /></figure><br />
  <div className="">
    {
        details.length > 200 ? <p> {details.slice(0, 200)} <Link to={`/news/${_id}`} className=' text-blue-500 font-semibold'>Read more...</Link> </p> :    <p> {details} </p> 
    }
 
    <div className=" flex justify-between items-center">
        <div className=' flex gap-2 items-center justify-center'>
           <FaStar></FaStar>
           <FaStar></FaStar>
           <FaStar></FaStar>
           <FaStar></FaStar>
           <FaStar></FaStar>
           <FaStar></FaStar>
           {rating?.number}
        </div>
     <div className=' flex items-center justify-center gap-4'>
     <div ><FaEye></FaEye></div> 
      <div > {total_view} </div>
     </div>
    </div>
  </div>
</div>
    );
};

export default NewsCard;