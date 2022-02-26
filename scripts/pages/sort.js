"use strict";

function getSortFactory() {
    
    const main                              = document.querySelector("#main");
    const photographHeader                  = document.querySelector(".photograph-header");
    const photographMedias                  = document.querySelector(".photograph-medias");
    const sortContainer                     = document.createElement("div");
    const titleContainer                    = document.createElement("p");
    const sortList                          = document.createElement("ul");
    const popularityBloc                    = document.createElement("li");
    const popularity                        = document.createElement("p");
    const arrowClose                        = document.createElement("button");
    const dateSort                          = document.createElement("li");
    const titleSort                         = document.createElement("li");

    main.style.display                      = "flex";
    main.style.flexDirection                = "column";
    
    photographHeader.style.order            = "1";
    
    photographMedias.style.order            = "3";

    sortList.classList.add("sortList");

    sortContainer.style.order               = "2";
    sortContainer.style.display             = "flex";
    sortContainer.style.marginLeft          ="100px";
    sortContainer.style.borderRadius        = "5px";
    sortContainer.style.marginTop           = "20px";

    titleContainer.textContent              = "Trier par";
    titleContainer.style.height             = "50px";
    titleContainer.style.width              = "80px";
    titleContainer.style.fontSize           = "18px";
    titleContainer.style.fontWeight         = "bold";
    titleContainer.style.marginRight        ="10px";

    sortList.style.listStyle                = "none";

    popularityBloc.textContent              = "Popularité";
    popularityBloc.style.fontSize           = "18px";
    popularityBloc.style.height             = "50px";
    popularityBloc.style.width              = "170px";
    popularityBloc.style.lineHeight         = "50px";
    popularityBloc.style.background         = "#901C1C";
    popularityBloc.style.color              = "white";
    popularityBloc.style.cursor             = "pointer"; 
    popularityBloc.style.position           = "relative";
    popularityBloc.style.paddingLeft        = "10px";  

    popularity.style.height                 = "100%";
    popularity.style.width                  = "95%";
    popularity.style.position               = "absolute";
    popularity.style.top                    = "0";
    
    arrowClose.innerHTML                    = '<i class="fas fa-chevron-down"></i>';
    arrowClose.style.position               = "absolute";
    arrowClose.style.top                    = "15px";
    arrowClose.style.right                  = "10px"; 
    arrowClose.style.background             = "none";
    arrowClose.style.border                 = "none";
    arrowClose.style.fontSize               = "18px";
    arrowClose.style.color                  = "white";
    arrowClose.style.cursor                 = "pointer";

    dateSort.textContent                    = "Date";
    dateSort.style.fontSize                 = "18px";
    dateSort.style.height                   = "50px";
    dateSort.style.width                    = "170px";
    dateSort.style.lineHeight               = "50px";
    dateSort.style.background               = "#901C1C";
    dateSort.style.color                    = "white";
    dateSort.style.cursor                   = "pointer";
    dateSort.style.paddingLeft              = "10px";
    dateSort.style.display                  = "none";

    titleSort.textContent                   = "Titre";
    titleSort.style.fontSize                = "18px";
    titleSort.style.height                  = "50px";
    titleSort.style.width                   = "170px";
    titleSort.style.lineHeight              = "50px";
    titleSort.style.background              = "#901C1C";
    titleSort.style.color                   = "white";
    titleSort.style.cursor                  = "pointer";
    titleSort.style.paddingLeft             = "10px"; 
    titleSort.style.display                 = "none";
    titleSort.classList.add("titleSort");

    // Ouverture et fermeture du bouton de tri
    sortList.addEventListener("mouseover", () => {
        dateSort.style.display = "block";
        titleSort.style.display = "block";
    });

    sortList.addEventListener("mouseout", () => {
        dateSort.style.display = "none";
        titleSort.style.display = "none";
    });
    
    // Tri des medias par catégories 
    titleSort.addEventListener("click", () => {
        pictures = pictures.sort((a, b) => a.title.localeCompare(b.title));
		buildGallery(pictures);
	}); 

    dateSort.addEventListener("click", () => {
        pictures = pictures.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
        buildGallery(pictures);
    });

    popularity.addEventListener("click", () => {
        pictures = pictures.sort((a1, a2) => a2.likes - a1.likes);
        buildGallery(pictures);
    })

    main.appendChild(sortContainer);
    sortContainer.appendChild(titleContainer);
    sortContainer.appendChild(sortList);
    sortList.appendChild(popularityBloc);
    popularityBloc.appendChild(popularity);
    popularityBloc.appendChild(arrowClose);
    sortList.appendChild(dateSort);
    sortList.appendChild(titleSort);
};

