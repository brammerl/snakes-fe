import request from 'superagent';


export const getSnake = async (snakeID) => {
    const data = await request.get(`https://morning-taiga-48701.herokuapp.com/api/snakes/${snakeID}`)

   

    return data.body
}

