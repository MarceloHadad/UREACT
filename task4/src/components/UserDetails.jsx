function UserDetails({name, age, profession}) {

    const renderDrivingEligibility = () => {
        if (age >= 18) {
            return <p>This user is eligible to drive.</p>;
        } else {
            return <p>This user is not eligible to drive.</p>;
        }
    }

    return (
        <>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            {renderDrivingEligibility()}
        </>
    )
}

export default UserDetails;