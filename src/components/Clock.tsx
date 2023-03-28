export default function Clock() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-8 mx-auto">
          <div className="card">
            <div className="card-header text-center fs-2">25 + 5 Clock</div>
            <div className="card-body">
              <div className="row align-items-center text-center">
                <div className="col fs-3">Break Length</div>
                <div className="col fs-3">Session Length</div>
              </div>
              <div className="row align-items-center text-center">
                <div className="col border">
                  <div className="row">
                    <div className="col">
                      <i className="bi bi-arrow-down-circle-fill"></i>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                      <i className="bi bi-arrow-up-circle-fill"></i>
                    </div>
                  </div>
                </div>
                <div className="col border">
                  <div className="row">
                    <div className="col">
                      <i className="bi bi-arrow-down-circle-fill"></i>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                      <i className="bi bi-arrow-up-circle-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mx-auto">
                <div className="card">
                <div className="card-body text-center">
                  <div className="card-text">
                    Session
                  </div>
                  <div className="card-title">
                    25:00
                  </div>
                  <div className="card-text">
                  <i className="bi bi-play"></i>
                  <i className="bi bi-pause"></i>
                  <i className="bi bi-arrow-repeat"></i>
                  </div>
                </div>
              </div>
                </div>
              </div>
             
            </div>
            <div className="card-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
