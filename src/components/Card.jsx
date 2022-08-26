export const Card = ({img,title,content}) => { 
  console.log({img,title,content});
  
    return ( 
<div className="card mt-3" style={{width:"18rem"}}>
  <div style={{width:'18rem',height:'400px'}}>
  <img 
  src = {img}
  className="card-img-top " alt="..." style={{width:'100%',height:"100%",objectFit:"cover"}} />
  </div>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{content}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}