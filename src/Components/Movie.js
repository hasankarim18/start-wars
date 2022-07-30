import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import dateFormat from "dateformat";


const Movie = (props) => {
    //    console.log(props)
    const date = new Date(props.releaseDate)

    dateFormat(date, "dd, mm, yyyy");
    return (
        <div className="m-2" >
            <Card>
                <CardHeader>
                    <h5>Movie Title: {props.title} </h5>
                </CardHeader>
                <CardBody>
                    <strong>
                        Opening Text:
                    </strong>
                    <p>
                        {props.openingText}
                    </p>
                </CardBody>
                <CardFooter>
                    <span>
                        Relese Date: {dateFormat(date, "dd, mmm, yyyy")}
                    </span>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Movie