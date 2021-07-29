//holds text to not clutter jsx
const aboutMe = `I am Christian Arce, a Boston based web developer who is passionate about creating positive user experiences, along with keeping code DRY and easy to read.
My ability to conceptualize a product, own it, and bring it to fruition has shaped my current skill set. JavaScript is my main programming language.
I am experienced using React.js to build responsive and mobile-first front-ends, and Node.js, Express.js, and PostgreSQL to create back-ends.
I am currently looking for work as a developer and am excited to talk to you about how we can work together!`;

const description = [`Typetracer is a single page typing application where users can
choose from a selection of over 280 public domain texts to type word by word, sentence by sentence, cover to cover, 
getting to enjoy a text as they practice their typing. It's mobile-first and responsive front-end was built with React.js, Tachyons.css, and custom CSS when needed.`,

`Typetracer's texts and associated metadata were sourced from Project Gutenberg(an archive of public domain texts), and were processed to fit Typetracer.
Specifically texts were paginated and turned from txt to JSON format, and a text's subjects were parsed to a single text category.
Texts are stored in an AWS S3 bucket, and texts' metadata are stored in a PostgreSQL database(typetracer-db) that was created and initialized  with Knex.js.
Typetracer-db also stores users' sign-in info, name, accessed texts, and texts' last access time and progress.`,

`For Typetracer's front-end to utilize  typetracer-db, typetracer-api, a RESTful API was built with Node.js and Express.js. 
Typetracer-API is responsible for user sign-in, user registration, user authentication, retrieval of text metadata, retrieval of texts from S3, and the creation of user texts along with updating their last access time and progress.`
];

const ttRepoBody = `Typetracer's front-end built with React.js, Tachyons.css, and CSS which features:`;
const ttRepoList = ['Responsive design', 'Mobile-first Design', 'Storage API', 'Front-end validation']

const ttApiRepoBody = `A RESTful Api that interfaces with 
typtracer-db, and an AWS S3 Bucket. Built with Node.js, Express.js, and Knex.js which features:`;
const ttApiRepoList =['Sign-in & registration','JWT user authentication',' CRUD operations']

const ttDBRepoBody = `Typetracer-db is a simple relational database who's purpose is to persist user information, text metadata and how they relate. 
Typetracer-db-builder has the following features to build typetracer-db: `;
const ttDBRepoList = ['A scalable solution to paginate txt files from the 2010 Project Gutenberg Iso to JSON (*Stored in AWS*)',
'Processing of PG\'s(a text archive) metadata to fit the DB design for Typetracer',
'Automation of DB schema creation and insertion of text metadata with Knex.js']

export {aboutMe, description, ttRepoBody, ttRepoList, ttApiRepoBody, ttApiRepoList, ttDBRepoBody, ttDBRepoList};