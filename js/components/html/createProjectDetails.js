import { projectsURL } from "../api/url.js";

// Looking for the id parameter
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// Setting the "id" variable
let id;

// Looking for "id" in the url
if (params.has("id")) {
    id = params.get("id");
} else {
    console.log("error in 'id' if statement");
}

export const projectDetailsURL = `${projectsURL}${id}`;

export function creatProjectDetails(detail){
    console.log(detail);

    // Page Title
    document.title = `Emilie Tonnessen | ${detail.title}`;

    // Headline
    const detailsTitle = document.querySelector(".project__headline");
    detailsTitle.innerHTML = detail.title;

    // Description
    const detailsDescription = document.querySelector(".project__description__p");
    detailsDescription.innerHTML = detail.description;

    // Moodboard
    const moodboardContainer = document.querySelector(".project__moodboard__image");
    detail.moodboard.slice(0, 3).forEach(function (moodboard){
        //console.log(moodboard);

        moodboardContainer.innerHTML += `
            <div style="background-image: url('${moodboard.url}');" class="project__moodboard__image-container"></div>
        `;
    });

    // Color Palette
    const primaryColor = document.querySelector(".project__color-palette--primary");
    const primaryColorText = document.querySelector(".project__color-palette--primary__text");
    primaryColor.style.background = detail.colorPalette.main[0].primary;
    primaryColorText.innerHTML = detail.colorPalette.main[0].primary;

    const secondaryColor = document.querySelector(".project__color-palette--secondary");
    const secondaryColorText = document.querySelector(".project__color-palette--secondary__text");
    secondaryColor.style.background = detail.colorPalette.main[0].secondary;
    secondaryColorText.innerHTML = detail.colorPalette.main[0].secondary;

    const tertiaryColor = document.querySelector(".project__color-palette--tertiary");
    const tertiaryColorText = document.querySelector(".project__color-palette--tertiary__text");
    tertiaryColor.style.background = detail.colorPalette.main[0].tertiary;
    tertiaryColorText.innerHTML = detail.colorPalette.main[0].tertiary;

    const lightGreyColor = document.querySelector(".project__color-palette--light-grey");
    const lightGreyColorColorText = document.querySelector(".project__color-palette--light-grey__text");
    lightGreyColor.style.background = detail.colorPalette.greys[0].light;
    lightGreyColorColorText.innerHTML = detail.colorPalette.greys[0].light;
    
    const greyColor = document.querySelector(".project__color-palette--grey");
    const greyColorText = document.querySelector(".project__color-palette--grey__text");
    greyColor.style.background = detail.colorPalette.greys[0].base;
    greyColorText.innerHTML = detail.colorPalette.greys[0].base;

    const errorColor = document.querySelector(".project__color-palette--error");
    const errorColorText = document.querySelector(".project__color-palette--error__text");
    errorColor.style.background = detail.colorPalette.error;
    errorColorText.innerHTML = detail.colorPalette.error; 

    // Links
    const linkWebsite = document.querySelector(".project__link--website");
    const linkGithub = document.querySelector(".project__link--github");
    
    linkWebsite.href = detail.linkLiveWebsite;
    linkGithub.href = detail.linkGithub;

    // Images
    const thumbnailDetail = document.querySelector(".project__thumbnail img");
    thumbnailDetail.src = detail.thumbnail.url;

    const screenshotDesktop = document.querySelector(".project__images--desktop");
    screenshotDesktop.src = detail.screenshotDesktop[0].url;

    const screenshotMobile = document.querySelector(".project__images--mobile");
    screenshotMobile.src = detail.screenshotMobile[0].url;

    // Typography
    const typographyLinks = document.querySelector(".project__typography__link__container");
    const families = detail.typography.families;
    const fontStyles = detail.typography.fontStyles;
    const importFont = detail.typography.import;

    for (var i = 0; i < families.length; i++) {
        typographyLinks.innerHTML += `
            <div>
                <a href="${families[i].familiy.link}" target="_blank" rel="noopener noreferrer" class="project__typography__link">
                    ${families[i].familiy.name}
                    <i class="fal fa-external-link"></i>
                </a>
            </div>
        `;
    }

    //console.log(fontStyles);
    //console.log(importFont);

    const h1 = document.querySelector(".project__typography--h1");
    const h1Text = document.querySelector(".project__typography__description--h1");

    const h2 = document.querySelector(".project__typography--h2");
    const h2Text = document.querySelector(".project__typography__description--h2");

    const h3 = document.querySelector(".project__typography--h3");
    const h3Text = document.querySelector(".project__typography__description--h3");

    const h4 = document.querySelector(".project__typography--h4");
    const h4Text = document.querySelector(".project__typography__description--h4");

    const h5 = document.querySelector(".project__typography--h5");
    const h5Text = document.querySelector(".project__typography__description--h5");

    const h6 = document.querySelector(".project__typography--h6");
    const h6Text = document.querySelector(".project__typography__description--h6");

    const p = document.querySelector(".project__typography--p");
    const pText = document.querySelector(".project__typography__description--p");

    h1.style.fontFamily = fontStyles.h1;
    h1Text.innerHTML = "h1 - " + fontStyles.h1;

    h2.style.fontFamily = fontStyles.h2;
    h2Text.innerHTML = "h2 - " + fontStyles.h2;

    h3.style.fontFamily = fontStyles.h3;
    h3Text.innerHTML = "h3 - " + fontStyles.h3;

    h4.style.fontFamily = fontStyles.h4;
    h4Text.innerHTML = "h4 - " + fontStyles.h4;

    h5.style.fontFamily = fontStyles.h5;
    h5Text.innerHTML = "h5 - " + fontStyles.h5;

    h6.style.fontFamily = fontStyles.h6;
    h6Text.innerHTML = "h6 - " + fontStyles.h6;

    p.style.fontFamily = fontStyles.p;
    pText.innerHTML = "paragraphs - " + fontStyles.p;

    const typographyImport = document.querySelector(".project__typography__import");
    typographyImport.href = detail.typography.import;


    // Logo:
    const logoDescriptionContainer = document.querySelector(".project__logo__description");
    const logoContainer = document.querySelector(".project__logo__image__container");

    logoDescriptionContainer.innerHTML = detail.logoDescription;

    detail.logo.forEach(function (logo){       
        logoContainer.innerHTML += `
            <img src="${logo.url}" alt="${logo.alternativeText}" class="project__logo__image">
        `;
    });


    // Icon
    const iconContainer = document.querySelector(".project__icon");
    const brandIcons = detail.brandIcon;



/*     console.log(detail.brandIcon.length);
    console.log(brandIcons[i].name);

    brandIcons.forEach(function(icon){
        console.log(icon.name)
        console.log(icon.url)

        iconContainer.innerHTML += `<div class="project__icon__box project__icon--light--bg col-6">`;

            
        if (icon.name === "Primary Brand Icon"){
            iconContainer.innerHTML = `<img src="${icon.url}" alt="${icon.alternativeText}">`;
        }

        iconContainer.innerHTML += `</div><div class="project__icon__box project__icon--dark-bg col-6"> `;

        if (icon.name === "Primary Brand Icon"){
            iconContainer.innerHTML = `<img src="${icon.url}" alt="${icon.alternativeText}">`;
        }

        iconContainer.innerHTML += `</div><div class="project__icon__box project__icon--dark-bg col-6">
            
            </div>

            <div class="project__icon__box project__icon--light--bg col-6">
            
            </div>
        `;
        
    }); */

    

/*     if (brandIcons.length  === 3){
        console.log("There is 4 icons")
        iconContainer.innerHTML += `
            <div class="project__icon__box project__icon--light--bg col-6"> ` 
            
            if (detail.brandIcon.name === "Primary Brand Icon"){
                `<p> ${detail.brandIcon}"</p>`
            }

            +
               
            `</div>

            <div class="project__icon__box project__icon--dark-bg col-6">
            
            </div>

            <div class="project__icon__box project__icon--dark-bg col-6">
            
            </div>

            <div class="project__icon__box project__icon--light--bg col-6">
            
            </div>
        `;


    } else{
        console.log("cant find icon..")
    } */
}