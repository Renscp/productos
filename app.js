var linkss = document.querySelectorAll('a[href*="#"]');

//assign a click event to all the # links
for(var l = 0; l < linkss.length; l++) {
    linkss[l].addEventListener('click', scrollMe);
}

function scrollMe(e) {
    e.preventDefault(); //needed in order for the scroll to work

    var hash = e.target.hash;

    //check if hash is not empty
    if(hash) {   

        // Scroll to that element
        document.getElementById('aceitess').scrollIntoView({ 
           behavior: 'smooth'
        });

        document.getElementById('cauchoss').scrollIntoView({ 
            behavior: 'smooth'
         });
    }
}
