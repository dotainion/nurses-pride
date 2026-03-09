import { BiMessage, BiStar, BiTag } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { Fragment } from "react";
import profile from "../../assets/images/profile.png"

export const ViewNurse = () =>{

    const statics = [
        {
            icon: BsPeople,
            value: '2000 +',
            info: 'patients'
        },{
            icon: BiTag,
            value: '10+',
            info: 'experience'
        },{
            icon: BiStar,
            value: '5',
            info: 'rating'
        },{
            icon: BiMessage,
            value: '1,872',
            info: 'reviews'
        }
    ];

    return(
        <div className="row gap-0 overflow-auto vh-100">
            <div className="col-12 col-md-5 position-sticky top-0 start-0">
                <div className="card border rounded-4 mt-3 mb-4">
                    <div className="card-body d-flex gap-3">
                        <div className="overflow-hidden rounded-4">
                            <img className="img-md rounded-4" src={profile} alt="" />
                        </div>
                        <div>
                            <h5>Dr. David Petel</h5>
                            <div className="text-muted">Carpiblogist</div>
                            <div className="text-muted">jColden Cardology Center</div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    {statics.map((row)=>(
                        <div className="col-3 text-center text-break">
                            <span className="d-inline-block rounded-circle bg-light p-2">
                                <row.icon className="fs-5" />
                            </span>
                            <div className="small">{row.value}</div>
                            <div className="small">{row.info}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-12 col-md-7">
                <div className="mt-0 mt-md-3 mb-4">
                    <h4>About me</h4>
                    <p>Dr. David Pagil a dedicated cardiologist rings a waith of experience to golden gate cardiology center in golden gate, CA</p>
                </div>
                <div className="mb-4">
                    <h4>Working Time</h4>
                    <p>Monday - Friday, 8:00 AM - 18:00 PM</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h4>Reviews</h4>
                    <button className="btn btn-sm">See All</button>
                </div>
                {[1, 2, 3, 4, 5].map((_, key)=>(
                    <Fragment key={key}>
                        <div className="d-flex gap-3">
                            <div className="overflow-hidden rounded-4">
                                <img className="img-sm rounded-4" src={profile} alt="" />
                            </div>
                            <div>
                                <h5>Emily Andersan</h5>
                                <div className="d-flex">
                                    <span>5.0</span>
                                    <BiStar className="text-warning" />
                                    <BiStar className="text-warning" />
                                    <BiStar className="text-warning" />
                                    <BiStar className="text-warning" />
                                    <BiStar className="text-warning" />
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}