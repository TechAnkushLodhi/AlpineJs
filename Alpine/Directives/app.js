document.addEventListener("alpine:init",()=>{
        Alpine.data("dropdown",()=>({
           open:false,
           toggle(){
            this.open=!this.open
           }
        }));
        Alpine.store("currentUser",{
                username:'Ankush',
                posts:['post1','post2']
        });
       
       
});

function handleClick(e) {
        console.log("hi kese ho");
    }
