import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import ListadoPosts from '~/components/listado-posts'


export function meta(){
  return[
    
    {title: 'GuitarLA - Blog'},
    {description: 'Blog de música, venta de guitarras'}
    
  ]
}

export async function loader(){
  const posts = await getPosts()
  
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
   
        <ListadoPosts
            posts={posts}
        />
    )
}

export default Blog