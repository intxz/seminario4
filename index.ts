import { Schema, model, connect, get } from 'mongoose';

interface IUser {
    _id?: string;
    name: string;
    surname: string;
    age: number;
}

interface IPlace {
    _id?: string;
    title: string;
    cords: {
        latitude: number;
        longitude: number;
    };
    description: string;
    author: string
}

const UserSchema = new Schema<IUser> ({
    _id: { type: String},
    name: { type: String, required: true},
    surname: { type: String, required: true},
    age: { type: Number, required: true}
});

const User = model<IUser>('user', UserSchema);

const PlaceSchema = new Schema<IPlace> ({
    _id: { type: String},
    title: { type: String, required: true},
    cords: {
        latitude: { type: Number, required: true},
        longitude: { type: Number, required: true}
    },
    description: { type: String, required: true},
    author: { type: String, required: true}
});

const Place = model<IPlace>('user', PlaceSchema);

async function run() {

    await connect('mongodb://localhost:27017/Seminario');
  
    const new_user = new User({
      name: 'Ángel',
      surname: 'Redodnod',
      age: 21
    });
    await new_user.save();
  
    console.log(new_user); 

    const place = new Place({
        title: 'Bankito',
        cords: [12,897],
        description: 'mdwn'
    })
    await place.save();

    console.log(place);

    console.log('postUser()');
    const name = prompt('Insert a name;');
    const surname = prompt('Insert a surname;');
    const age = prompt('Insert your age;');
    postUser(name, surname, age);

    console.log('postPlace()');
    const title = prompt('Insert a title:');
    const latitude = prompt('Insert the latitude:');
    const longitude = prompt('Insert the longitude:');
    const description = prompt('Insert a description:');
    postPlace(title, latitude, longitude, description);

    console.log('getUsers()');
    getUsers();

    console.log('getUser()');
    const name1 = prompt('Insert the name: ');
    getUser(name1);

    console.log('getPlcaes()');
    getPlaces();
}

run().catch(err => console.log(err));

async function postUser(name, surname, age) {
    const new_user = new User ({
        name: name,
        surname: surname,
        age: age
    });
    await new_user.save()
}

async function postPlace(title, latitude, longitude, description){
    const new_place = new Place ({
        title: title,
        cords: [latitude, longitude],
        description: description
    })
    await new_place.save();
}

async function getUsers() {
    const users = await User.find();
    console.log(users);
}

async function getUser(name){
    const user = await User.findOne({ name : name });
    console.log(user);
}

async function getPlaces() {
    const places = await Place.find();
    console.log(places);
}

async function getPlace(title){
    const place = await Place.findOne({ title : title });
    console.log(place);
}

async function deleteUser(id){
    const user = await User.findByIdAndDelete({_id : id});
    if (user){
        console.log('finito');
    } else {
        console.log('no finito');
    }
}

async function deletePlace(id){
    const place = await Place.findByIdAndDelete({_id : id});
    if (place){
        console.log('finito');
    } else {
        console.log('no finito');
    }
}

async function updateUser(id) {
    const user = await User.updateOne({ _id: id});
}

async function updatePlace(id) {
    const place = await Place.updateOne({ _id: id});
}

async function populateUP() {
    const place = await Place.find().populate('author');
    console.log(place);
}
