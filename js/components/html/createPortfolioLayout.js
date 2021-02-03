import displayMessage from "../messages/displayMessage.js";

// Display a list of projects from the API
export default function createPortfolioLayout(projects){
    const portfolioContainer = document.querySelector(".portfolio__container");

    // Remove the loading skeleton
    portfolioContainer.innerHTML = "";

    // If there is no projects, display an error message:
    if (projects.length === 0) {
        displayMessage(
            "feedback feedback--error",
            "No projects found", 
            ".portfolio__container"
        );
    }

    // Create new HTML with the projects
    projects.forEach(function (project) {
        portfolioContainer.innerHTML += `
            <section class="portfolio__card col-sm-12 col-md-6 col-lg-4">
                <div class="portfolio__card__container">
                    <img src="${project.thumbnail.url}" alt="${project.title} Thumbnail" class="portfolio__card__thumbnail portfolio__card__loading">
                    <div class="portfolio__card__content">
                        <h5 class="portfolio__card__title portfolio__card__loading">
                            ${project.title}
                        </h5>
                        <div class="portfolio__card__description portfolio__card__loading">
                            ${project.description}
                        </div>
                        <div class="portfolio__card__buttons">
                            <a href="./project.html?id=${project.id}" class="btn btn--secondary btn--sm">
                                Detaljer
                            </a>
                            <a class="btn btn--tertiary btn--sm" target="_blank" rel="noopener noreferrer" href="${project.linkLiveWebsite}">
                                Nettside
                                <i class="fal fa-external-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    });
}