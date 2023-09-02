import React from "react";

const FeaturedPosts = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            {/* <div className='co'></div> */}
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/351420515_108588828915466_570186738235400765_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=Pq7r_k-7vxIAX-l0pvC&_nc_ht=scontent.fagr1-1.fna&oh=00_AfDwk-t0dmpQ_egtz0TRIvmkjLY3_8Vlvc5zAXe_kAzQdA&oe=6482A040"
                    class="img-fluid rounded-start"
                    alt="Card title"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Hindustan Times</h5>
                    <p class="card-text">
                      Veteran actor #NaseeruddinShah revealed that he doesn't
                      take these awards seriously and said that he uses his
                      #Filmfare awards as door handles for his washrooms
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
