function Menu({ balance, onStart }) {
    return (
        <div className='menu'>
            <p className='title-text'>Welcome to Blackjack!</p>
            <p className='status-text'>Place Your Bets Here</p>
            <BetInput balance={balance} onStart={onStart} />
        </div>
    );
}

export { Menu };