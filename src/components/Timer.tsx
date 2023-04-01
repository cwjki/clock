import { useState, MouseEvent, useEffect } from "react";
import { convertMsToMinutesSeconds } from "../utils/utils";
import tick from "../assets/tick.mp3"; // tick audio
import alarm from "../assets/alarm.mp3"; // alarm audio

export default function Timer() {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isStopped, setIsStopped] = useState(true);
  const [isSession, setIsSession] = useState(true);
  const [countDown, setCountDown] = useState(25 * 60 * 1000);

  // audio elements
  let alarmSound = document.getElementById("beep") as HTMLAudioElement;
  let tickSound = document.getElementById("tick") as HTMLAudioElement;

  useEffect(() => {
    if (countDown < 0) {
      isSession ? updateCountDown(breakTime) : updateCountDown(sessionTime);
      setIsSession(!isSession);
    }
    if (!isStopped) {
      const interval = setInterval(() => {
        setCountDown(countDown - 1000);

        //making the alarm sound when count down timer reach 0 seconds
        if (countDown === 0) {
          alarmSound.load();
          alarmSound.play();
        }
        // making the tick sound in the last 5 seconds
        if (countDown <= 6000 && countDown >= 1000) {
          tickSound.load();
          tickSound.play();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStopped, countDown]);

  // get a target date adding a amount of mins to the current time
  const getTargetDate = (amount: number) => {
    const amountInMs = amount * 60 * 1000;
    const nowInMs = new Date().getTime();
    return amountInMs + nowInMs;
  };

  // handle the play and pause clicks
  const handlePlayPause = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsStopped(!isStopped);
  };

  // reset to the default values
  const handleReset = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSessionTime(25);
    setBreakTime(5);
    setIsStopped(true);
    setIsSession(true);
    setCountDown(25 * 60 * 1000);

    alarmSound = document.getElementById("beep") as HTMLAudioElement;
    tickSound = document.getElementById("tick") as HTMLAudioElement;
    alarmSound.pause();
    alarmSound.load();
    tickSound.pause();
    tickSound.load();
  };

  // handle the increment and decrement of the session and break time
  const handleSessionAndBreakTime = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    switch (event.currentTarget.id) {
      case "break-decrement":
        if (breakTime > 1) {
          setBreakTime(breakTime - 1);
          if (!isSession) updateCountDown(breakTime - 1);
        }
        break;
      case "break-increment":
        if (breakTime < 60) {
          setBreakTime(breakTime + 1);
          if (!isSession) updateCountDown(breakTime + 1);
        }
        break;
      case "session-decrement":
        if (sessionTime > 1) {
          setSessionTime(sessionTime - 1);
          if (isSession) updateCountDown(sessionTime - 1);
        }
        break;
      case "session-increment":
        if (sessionTime < 60) {
          setSessionTime(sessionTime + 1);
          if (isSession) updateCountDown(sessionTime + 1);
        }
        break;
      default:
        alert("Something went wrong!");
        break;
    }
  };

  // update the count down timer with the session length or the break length
  const updateCountDown = (target: number) => {
    const countDownTime = getTargetDate(target) - new Date().getTime();
    setCountDown(countDownTime);
  };

  return (
    <div className="container-fluid text-dark">
      <audio id="beep" src={alarm} className="clip"></audio>
      <audio id="tick" src={tick} className="clip"></audio>
      <div className="row align-items-center vh-100">
        <div className="col-md-6 col-sm-8 col-12 mx-auto">
          <h1 className="text-center fw-semibold p-3">Pomodoro Timer</h1>

          <div className="card bg-secondary shadow-lg rounded-5">
            <div className="card-body">
              <div className="row align-items-center text-center pt-4 pb-1">
                <div id="break-label" className="col fs-4">
                  Break Length
                </div>
                <div id="session-label" className="col fs-4">
                  Session Length
                </div>
              </div>

              <div className="row align-items-center text-center">
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <button
                      id="break-decrement"
                      className={`col btn border-0 ${
                        isStopped ? "" : "disabled"
                      }`}
                      onClick={handleSessionAndBreakTime}
                    >
                      <i className="bi bi-chevron-down fs-3"></i>
                    </button>
                    <div id="break-length" className="col fs-3">
                      {breakTime}
                    </div>
                    <button
                      id="break-increment"
                      className={`col btn border-0 ${
                        isStopped ? "" : "disabled"
                      }`}
                      onClick={handleSessionAndBreakTime}
                    >
                      <i className="bi bi-chevron-up fs-3"></i>
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <button
                      id="session-decrement"
                      className={`col btn border-0 ${
                        isStopped ? "" : "disabled"
                      }`}
                      onClick={handleSessionAndBreakTime}
                    >
                      <i className="bi bi-chevron-down fs-3"></i>
                    </button>
                    <div id="session-length" className="col fs-3">
                      {sessionTime}
                    </div>
                    <button
                      id="session-increment"
                      className={`col btn border-0 ${
                        isStopped ? "" : "disabled"
                      }`}
                      onClick={handleSessionAndBreakTime}
                    >
                      <i className="bi bi-chevron-up fs-3"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row align-items-center py-4 px-3">
                <div className="col-lg-7 col-8 mx-auto">
                  <div className="card bg-primary rounded-5 shadow">
                    <div className="card-body text-center">
                      <div
                        id="timer-label"
                        className={`card-text fs-3 fw-bold ${
                          countDown < 60000 ? "text-danger" : ""
                        }`}
                      >
                        {isSession ? "Session" : "Break"}
                      </div>
                      <div
                        id="time-left"
                        className={`card-title fs-1 fw-bolder ${
                          countDown < 60000 ? "text-danger" : ""
                        }`}
                      >
                        {convertMsToMinutesSeconds(countDown)}
                      </div>
                      <div className="row align-items-center">
                        <button
                          id="start_stop"
                          className="col btn border-0"
                          type="button"
                          onClick={handlePlayPause}
                        >
                          <i
                            className={`bi ${
                              isStopped ? "bi-play" : "bi-pause "
                            } bi-arrow-repeat fs-1`}
                          ></i>
                        </button>
                        <button
                          id="reset"
                          className="col btn border-0"
                          type="button"
                          onClick={handleReset}
                        >
                          <i className="bi bi-arrow-repeat fs-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <nav className="navbar mt-3">
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand fs-6 text-primary fw-bold">
                by cwjki
              </span>
              <a
                className="navbar-brand"
                href="https://github.com/cwjki"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github text-primary"></i>
              </a>
              <a
                className="navbar-brand"
                href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin text-primary"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
