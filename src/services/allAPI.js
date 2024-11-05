import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"
import serverURL from "./serverURL"

// uploada videosAPI = post http rqst called ADD component
export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/uploadvideos`,videoDetails)
}

// getAllVideosAPI = get http rqst called view component when compponent diaplayed in broweser insixe its useeffect hook
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/uploadvideos`,{})
}

// saveHistoryAPI = save watched  history http://localhost:3000/history by videocard component
export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,historyDetails)
}

// getAllHistoryAPI = get rqst to  history http://localhost:3000/history to see in browser when it open
export const getAllHistoryAPI = async (historyDetails)=>{
    return await commonAPI("GET",`${serverURL}/history`,historyDetails)
}

// deleteHistoryAPI = delete rqst to  history http://localhost:3000/history 
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// removeVideoAPI = delete http rqst called view component when user clicks delete button
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/uploadvideos/${id}`,{})
}

// saveCategoryAPI = post http rqst to http://localhost:3000/categories called categories component when user clicks add button
// categories ={categoryname , allvideos}
export const saveCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("POST",`${serverURL}/categories/`,categoryDetails)
}

// getCategoryAPI = get http rqst to http://localhost:3000/categories called categories component when user open browser
export const getAllCategoryAPI =async ()=>{
    return await commonAPI("GET",`${serverURL}/categories/`,{})
}
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}
// updatecategoryapi = put http rqst to http://localhost:3000/categories/id called by category component when video drop 
// over the category 
export const updatecategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}