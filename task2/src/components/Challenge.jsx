function Challenge() {
    let n1 = 2;
    let n2 = 3;

    const handleSum = () => {
        return n1 + n2;
    }

    return (
        <div>
            <p>N1 value is: {n1}</p>
            <p>N2 value is: {n2}</p>
            <button onClick={() => console.log(handleSum())}>Sum</button>
        </div>
    )
}

export default Challenge;