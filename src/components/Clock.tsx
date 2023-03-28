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
                  <div className="row align-items-center">
                    <div className="col">
                      <button className="btn">
                        <i className="bi bi-chevron-down fs-3"></i>
                      </button>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                    <button className="btn">
                        <i className="bi bi-chevron-up fs-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col border">
                  <div className="row align-items-center">
                    <div className="col">
                    <button className="btn">
                        <i className="bi bi-chevron-down fs-3"></i>
                      </button>
                    </div>
                    <div className="col">6</div>
                    <div className="col">
                    <button className="btn">
                        <i className="bi bi-chevron-up fs-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mx-auto">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="card-text">Session</div>
                      <div className="card-title">25:00</div>
                      <div className="card-text">
                        <button className="btn" type="button">
                          <i className="bi bi-play fs-1"></i>
                        </button>
                        <button className="btn" type="button">
                          <i className="bi bi-pause fs-1"></i>
                        </button>
                        <button className="btn" type="button">
                          <i className="bi bi-arrow-repeat fs-1"></i>
                        </button>
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
