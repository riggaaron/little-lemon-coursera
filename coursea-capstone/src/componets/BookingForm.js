import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <div>
      <header>
        <section id="booking">
          <form onSubmit={handleSubmit}>
            <fieldset>
              {/* date */}
              <div>
                <label htmlFor="book-date">Choose date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                ></input>
              </div>
              {/* time */}
              <div>
                <label htmlFor="book-times">Choose time</label>
                <select
                  id="book-times"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}>
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map((availableTimes) => {
                    return (
                      <option key={availableTimes}>{availableTimes}</option>
                    );
                  })}
                </select>
              </div>
              {/* guests */}
              <div>
                <label htmlFor="book-guests">How many guests</label>
                <input
                  id="book-guests"
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                ></input>
              </div>
              {/* occation */}
              <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversery</option>
                  <option>First Date</option>
                </select>
              </div>
              {/* Submitt */}
              <div className="btnSubmit">
                <input
                  aria-label="On Click"
                  type="submit"
                  value={"Make a reservation"}
                ></input>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};
export default BookingForm;
