export default function User ({user}) {
    console.log(user)
    const {name, phone, email, website} = user;
    return (
        <div className="box">
            <h3>User Name: {name}</h3>
            <h3>User Phone: {phone}</h3>
            <h3>User Email: {email}</h3>
            <h3>User Website: {website}</h3>
        </div>
    )
}