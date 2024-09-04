import "./bechelorDegree.css"

export default function BechelorDegree({ degree,department,desc }: any) {
    return (
        <div className="degree-container">
            <div className='degree'>

                <div className="degree-info">

                    <div>
                        <img src="/Asset/lab.jpg" alt="" className="image"/>
                        <p>{degree}</p>
                    </div>

                    <div>
                        <h1>{department}</h1>
                        <p>{desc}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
