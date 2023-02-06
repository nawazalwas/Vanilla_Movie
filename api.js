export const database = [
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' },
    { name: 'Indiana Jones and the Dial of Destiny', imgUrl: 'images/Poster/Indiana-Jones5.avif' },
    { name: 'John Wick 4', imgUrl: 'images/Poster/john-wick-4.avif' },
    { name: 'Mission: Impossible 7', imgUrl: 'images/Poster/mission-impossible.jpg' },
    { name: 'Star Trek 4', imgUrl: 'images/Poster/Star-Trek-4.jpg' },
    { name: 'Transformers: Rise of the Beasts', imgUrl: 'images/Poster/transformer.webp' },
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' },
    { name: 'Indiana Jones and the Dial of Destiny', imgUrl: 'images/Poster/Indiana-Jones5.avif' },
    { name: 'John Wick 4', imgUrl: 'images/Poster/john-wick-4.avif' },
    { name: 'Mission: Impossible 7', imgUrl: 'images/Poster/mission-impossible.jpg' },
    { name: 'Star Trek 4', imgUrl: 'images/Poster/Star-Trek-4.jpg' },
    { name: 'Transformers: Rise of the Beasts', imgUrl: 'images/Poster/transformer.webp' },
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' }
    
]
export const availibility = {
    '21 Jump Street': [1, 2, 5, 8, 9,19,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cars': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }