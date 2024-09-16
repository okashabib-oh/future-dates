function DateComp({ step, count, date }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <p className="date" style={{
                textAlign: 'center',
                color: '#535bf2',
                borderRadius: '10px',
                boxShadow: '2px 3px 10px 0px #535bf2',
                border: '1px solid #535bf2',
            }}>
                {step == 0 || count == 0 ? 'Todays Date is ' : `${count} Days from today is `}
                {date.toDateString()}
            </p>
        </div>
    )
}

export default DateComp;