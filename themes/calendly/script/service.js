var event = {
    name: "Revisão de preços",
    organizer: "Vendas ACME",
    duration: 30,
    description: "Nossa equipe se reunirá com você para revisar as opções de preços.",
    date: new Date(),
    time: "9:00",
    attendees: []
};

sessionStorage.setItem("eventObj", JSON.stringify(event));