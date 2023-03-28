export default function Clock() {
  return (
    <div className="container-fluid text-dark">
      <div className="row align-items-center vh-100">
        <div className="col-md-6 col-sm-10 col-12 mx-auto">
          <div className="card bg-secondary shadow-lg rounded-5">
            <div className="card-body">
              <div className="card-title text-center fs-2 fw-semibold">
                25 + 5 Clock
              </div>
              <div className="row align-items-center text-center">
                <div className="col fs-4">Break Length</div>
                <div className="col fs-4">Session Length</div>
              </div>
              <div className="row align-items-center text-center">
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <button className="btn border-0">
                        <i className="bi bi-chevron-down fs-3"></i>
                      </button>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                    <button className="btn border-0">
                        <i className="bi bi-chevron-up fs-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                    <button className="btn border-0">
                        <i className="bi bi-chevron-down fs-3"></i>
                      </button>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                    <button className="btn border-0">
                        <i className="bi bi-chevron-up fs-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5 mx-auto">
                  <div className="card bg-primary rounded-5 shadow">
                    <div className="card-body text-center">
                      <div className="card-text fs-3 fw-bold">Session</div>
                      <div className="card-title fs-1 fw-bolder">25:00</div>
                      <div className="card-text">
                        <button className="btn border-0" type="button">
                          <i className="bi bi-play fs-1 "></i>
                        </button>
                        <button className="btn border-0" type="button">
                          <i className="bi bi-pause fs-1"></i>
                        </button>
                        <button className="btn border-0" type="button">
                          <i className="bi bi-arrow-repeat fs-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
