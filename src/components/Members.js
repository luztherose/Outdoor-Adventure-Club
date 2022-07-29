import React from "react";
import { useState } from "react";
import '../../src/App.css';

const membersData = [
    {
        'id': 1,
        'name': 'Arturo Mejia',
        'age': 30,
        'rating': 5,
        'activities': ['Hiking',]
    },
    {
        'id': 2,
        'name': 'Anne Smith',
        'age': 20,
        'rating': 4,
        'activities': ['Biking']
    },
    {
        'id': 3,
        'name': 'Peter Smith',
        'age': 27,
        'rating': 5,
        'activities': ['Runnning']
    },
    {
        'id': 4,
        'name': 'George Lamarck',
        'age': 35,
        'rating': 3,
        'activities': ['Hiking', 'Runnning', 'Biking']
    },

]

function Members() {
    const [members, setMembers] = useState(membersData);

    const deleteMember = (id) => {
        const updatedMembers = members.filter(member => member.id !== id);
        setMembers(updatedMembers);
    }

    const handleSearch = (e) => {
        let searchText = e.target.value.toLowerCase();
        if (!searchText) {
            setMembers(membersData);
        } else {
            const updatedMembers = membersData.filter((member) => {
                console.log(member.activities.includes(searchText))
                console.log(member.activities)
                return member.name.toLowerCase().indexOf(searchText) > -1 ||
                    member.activities.some(i => i.toLocaleLowerCase().indexOf(searchText) > -1
                    )
            });
            setMembers(updatedMembers);
        }
    }


    return (
        <div>
            <form>
                <input type="text" placeholder="Search by name or activity" className="search-bar" onChange={handleSearch} />
            </form>
            {members.map(member => {
                return (
                    <div className="card-container">
                        <div className="card-item" id={member.id}>
                            <p><span className="item-lebels">Name:</span> {member.name}</p>
                            <p><span className="item-lebels">Age:</span> {member.age}</p>
                            <p><span className="item-lebels">Rating:</span> {member.rating}/5 ⭐</p>
                            <div>
                                <p><span className="item-lebels">Activities:</span></p>
                                <ul className="activities">{member.activities.map((activity, index) => <li id={index}>{activity}</li>)}</ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => {
                                deleteMember(member.id)
                            }}>x</button>
                        </div>
                    </div>)
            })}
        </div>
    );
}

export default Members;