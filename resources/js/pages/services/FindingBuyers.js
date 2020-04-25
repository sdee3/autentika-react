import React from "react";

export default function FindingBuyers() {
  return (
    <section className='service'>
      <div className='container'>
        <h1>Finding Buyers</h1>
        <p>
          We do not create a long list of companies. Instead, we find your
          perfect match and bring buyers at your door.
        </p>
        <p>
          We customise the matchmaking process to the specific needs of each
          company. Usually, the process includes the following steps:
        </p>

        <section className='service-subsection'>
          <h2>Step 1 - Creation of the long list of buyers</h2>
          <p>
            We create the list using the several reliable sources. (internal
            knowledge, the network of professional contacts, product and
            sector-specific databases, experts etc)
          </p>
        </section>

        <section className='service-subsection'>
          <h2>Step 2 – From the long list to the shortlist</h2>
          <p>
            Companies not matching your profile and offer are removed from the
            list.
          </p>
        </section>

        <section className='service-subsection'>
          <h2>Step 3 – Interviews with the selected companies</h2>
          <p>
            We conduct most of the interviews by physical visits to chosen
            companies. The final list includes only companies showing the
            interest to your offer.
          </p>
        </section>

        <section className='service-subsection'>
          <h2>Step 4 – Organisation of the meetings</h2>
          <p>
            We usually organise visits of the interested buyers to your company.
            Your visit to the potential buyers can be organised too.
          </p>
        </section>
      </div>
    </section>
  );
}
