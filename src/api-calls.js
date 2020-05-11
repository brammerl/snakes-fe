import request from 'superagent';

export const addSnake = async (snake) => {
    const data = await request.post(`https://morning-taiga-48701.herokuapp.com/api/snakes/`, snake)

    console.log(data);

    return data.body;
}

export const getSnake = async (snakeID) => {
    const data = await request.get(`https://morning-taiga-48701.herokuapp.com/api/snakes/${snakeID}`)

   

    return data.body
}