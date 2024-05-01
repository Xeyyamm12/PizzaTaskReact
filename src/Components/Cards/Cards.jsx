import Card from '../Card/Card';
import { Data } from '../../db';

const Cards = ({setState}) => {
  return (
    <>
        {
            Data.map((item) => (
                <Card key={item.name} name={item.name} price={item.price} description={item.description} image={item.image}  setState={setState}/>
            ))
        }
    </>
  )
}

export default Cards