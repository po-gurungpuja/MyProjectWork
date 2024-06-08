var blogs = [
    {
        Id: 1,
        title: "Eat Code Sleep Repeat Again",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo nbnb", 
    },

    {
        Id: 2,
        title: "hello world hello name fantastic",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 3,
        title: "Happy Coding Happy Assignment Happy Coding",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 4,
        title: "Girls Boys Boys Girls",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 5,
        title: "Hello People Hello Public Cool Summer",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    }
];

let n = blogs.length;
// this function helps to show up 
//the content of the div
showBlogContents();
function showBlogContents()
{
    let headContent = document.querySelectorAll("#head-content");
    let blogNumber = document.querySelectorAll("#blog-num"); 
    let paraContent = document.querySelectorAll("#para-content");
        
    for(var i = 0; i<n; i++)
    {
        headContent[i].innerHTML =  blogs[i]['title'];
        blogNumber[i].innerHTML = blogs[i]['Id'];
        paraContent[i].innerHTML = blogs[i]['content'];        
    }
    
}

  
function searchBlogs()
{
    let box, x, y, input, filter;
    // main div box
    x = document.getElementById("main");
    // sub-main box where the content title included
    box = document.getElementsByClassName("intra-container");
    // title include in h2 tag
    y = x.getElementsByTagName("h2");

    input = document.getElementById("searchBox");
    // input the value on search box
    filter = input.value.toUpperCase();
    
    // check and loop through all the content on each key input
    for (i = 0; i < y.length; i++) 
        {
            let a = y[i].innerHTML;
            //console.log(a);           
            // output the text of content of the title in <h2> tag
            //console.log(a.toUpperCase());            
            if (a.toUpperCase().indexOf(filter) > -1) 
            {
                // if input value on search bar matches with title content 
                // matching title shows up
                box[i].style.display = "block";
            }
            else 
            {
                // if the matching don't happen then
                // block donot show up
                box[i].style.display = "none";
            }
        }
    }


