export default function Clock() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-8 mx-auto">
          <div className="card">
            <div className="card-header text-center fs-2">25 + 5 Clock</div>
            <div className="card-body">
              <div className="card-title">
                <div className="row align-items-center text-center">
                  <div className="col fs-3">Break Length</div>
                  <div className="col fs-3">Session Length</div>
                </div>
                <div className="row align-items-center text-center">
                  <div className="col border">
                    <span></span>
                    <i className="bi bi-arrow-up-circle-fill"></i>
                    <p>6</p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
              <div className="card-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
