let query = "select name, age from author";
let parsedQuery = query.replace(/(select|from)/g, "@");
let tokenizedQuery = parsedQuery.match(/@([a-z0-9 ,]+)/g);
let columns = tokenizedQuery[0].replace(/[@ ]*/g, "");
let table = tokenizedQuery[1].replace(/[@ ]*/g, "");