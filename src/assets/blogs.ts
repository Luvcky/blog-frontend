export type BlogPost = {
    title : string
    authorName : string
    blog : string
    timeToRead : number
    postDate : Date
}

export let blogs: BlogPost[] = [{title: 'hello' , authorName: "123" , blog: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" , timeToRead: 2 , postDate: new Date} , {title: "1234" , authorName: "abc" , blog:"22222222222222222222222222222", timeToRead: 3, postDate: new Date}]
export function addBlog(newblog : BlogPost){
    blogs.push(newblog)
}


