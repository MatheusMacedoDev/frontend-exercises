const movies = [{
    title: "Supernova",
    genre: "Ação",
    year: 2013,
    description: "O filme trata de um cometa gigante que se encaminha para a Terra para destruí-la enquanto super-heróis tentam impedi-lo"
}, {
    title: "Supernova 2",
    genre: "Ação",
    year: 2016,
    description: "O filme trata de um cometa gigante que se encaminha para a Terra para destruí-la enquanto super-heróis tentam impedi-lo"
}];

movies.forEach(movie => {
    const { title, genre, year } = movie;
    console.log(title, genre, year);
})


