// components/Section-2.tsx
import React from 'react';
import chanel from '../src/images/chanel.png';
import Hermes from '../src/images/Hermes.png';
import fortuneo from '../src/images/fortuneo.png';
import ca from '../src/images/ca.png';
import Image from 'next/image';

const Section2 = () => {
    // Client & Client's logo section
    return (
    <section className="client-sec">
        <div className="custome-container">
            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <div className="client-sec-left">
                        <h6>Clients</h6>
                        <h5>From the world of luxury to financial rigor, our agency excels in satisfying demanding clients.</h5>
                        <p> Our success is woven with iconic names such as Chanel, Hermès, Crédit Agricole, and Fortuneo. These prestigious clients are not just names on a list, but partners with whom we have forged enduring and profitable relationships. </p>
                        <p>Today, we focus our expertise on small and medium-sized enterprises as well as liberal professions, delivering the same quality of service that has captivated these major brands. Their satisfaction remains the eloquent testimony of our commitment to digital excellence.</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="client-sec-right">
                        <ul>
                            <li><Image className="w-100" src={chanel} alt=""/></li>
                            <li><Image className="w-100" src={Hermes} alt=""/></li>
                            <li><Image className="w-100" src={fortuneo} alt=""/></li>
                            <li><Image className="w-100" src={ca} alt=""/></li>
                        </ul>
                        </div>
                        </div>
             </div>
        </div>
     </section>
    );
};

export default Section2;