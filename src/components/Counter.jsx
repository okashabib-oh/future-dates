function Counter({ title, increment, decrement, value }) {
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                <button onClick={decrement}>-</button>
                <h1>{title}: {value}</h1>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter;