let books = [
    {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
    {author: 'Haruki Murakami', title: '1q84'},
    {author: 'John D MAcDonald', title: 'Nightmare in Pink'},
    {author: 'Ncholas Zakas', title: 'Understanding Ecmasript 6'}
]


function authSearch (){
    let aName = document.getElementById("authorSearch").value
    let name = books.filter((x) => x.author === aName)
    try {
        document.getElementById('result').innerHTML = 
            'yes we have at least one book by ' + name[0].author
    }

    catch(err){
        document.getElementById('result').innerHTML = 
            'sorry no books by ' + aName
    }
}  

function addBook(){
    books.push({author: document.getElementById('addAuthor').value,
              title: document.getElementById('addBook').value}) 
}


function showAllBooks (){
    for (i in books){
        let listItem = document.createElement('li')
        let textnode = document.createTextNode(books[i++].title)
        listItem.appendChild(textnode)
        document.getElementById('allTheBooks').appendChild(listItem)
        }
    
}

