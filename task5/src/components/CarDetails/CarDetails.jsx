import styles from './CarDetails.module.css';

function CarDetails() {
    let cars = [
        { id: 1, brand: 'Toyota', model: 'Corolla', color: 'Blue' },
        { id: 2, brand: 'Honda', model: 'Civic', color: 'Red' },
        { id: 3, brand: 'Ford', model: 'Mustang', color: 'Black' },
        { id: 4, brand: 'Chevrolet', model: 'Camaro', color: 'Yellow' },
    ]

    return (
        <>
            <h2 className={styles.title}>Car Details</h2>
            {cars.map((car) => (
                <div key={car.id} className={styles.car_card} style={{borderColor: car.color}}>
                    <h3>{car.brand} {car.model}</h3>
                    <p>Color: {car.color}</p>
                </div>
            ))}
        </>
    );
}

export default CarDetails;