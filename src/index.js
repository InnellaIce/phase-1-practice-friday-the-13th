fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(data => {
        data.forEach(movie => {
            const image = document.createElement('img');
            
            image.src = movie.image;

            const movieList = document.getElementById('movie-list');
            movieList.appendChild(image);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

