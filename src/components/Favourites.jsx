import { useSelector, useDispatch } from "react-redux"

import { Badge, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Favourites = () => {
    const favouriteJob = useSelector((state) => state.cart.favouriteJob)
    const dispatch = useDispatch()
    
    return(
    <>
    {console.log(favouriteJob)}
        
        {favouriteJob.map((job, i) => (
            // <Row key={i}>
            //     <Link to={`/${job.company_name}`} key={i}>cioas</Link></Row >
           <Row key={i}
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${job.company_name}`}>{job.company_name}</Link>
      </Col>
      <Col xs={9} >
        <a href={job.url} target="_blank" rel="noreferrer">
          {job.title}
        </a>
        <Badge className='badgee' bg="light" text="dark" onClick={() => {
          
          dispatch({
            type: "REMOVE-FROM-FAVOURITE",
            payload: i
          })
        }}>
          remove
        </Badge>
            
            </Col>
            </Row>
        ))}
    </>
    )
}

export default Favourites