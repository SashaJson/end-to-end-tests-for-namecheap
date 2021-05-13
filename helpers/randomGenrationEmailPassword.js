import { randexp } from 'randexp';

module.exports = () => {

    return {
        email: randexp(/[a-z0-9]{4,15}@gmail\.com/),
        password: randexp(/^[a-zA-Z0-9][0-9 a-z0-9]{4,9}/)
    };

}
