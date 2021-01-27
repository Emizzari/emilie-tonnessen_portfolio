<?php
    $message_sent = false;

    if(isset($_POST['email']) && $_POST['email'] != ''){

        if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $topic = $_POST['topic'];
            $message = $_POST['message'];

            $to = "emilie@tonnessen.com";
            $subject = "$topic \r\n";
            $body = "";

            $body .= "<div><strong>From: </strong>" .$userName. "</div>";
            $body .= "<div><strong>Email: </strong>".$userEmail. "</div>";
            $body .= "<div><strong>Message:</strong></div><p>".$message. "</p>";

            $mailheader = "Fra: $email \r\n";
            $mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        }

        mail($to, $subject, $body, $mailheader);

        $message_sent = true;
    }
?>

<html lang="en">
<head>
    <!-- Technical: -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO: -->
    <meta name="image" property="og:image" content="https://www.tonnessen.com/graphics/thumbnail.png" />
    <meta name="author" content="Emilie Tønnessen">
    <meta name="description"
        content="Oslo, Viken, Akershus, Bærum, Sandvika, Risør, Tvedestrand, Arendal, Gjerstad, Frontend, Frontend utvikler, Front-end web development, Web developer, Webutvikler, Web design, Junior frontend developer, Internet, Responsive webdesign, User friendly, Brukervennlig, Mobil, Mobile, Tablet, Nettbrett, Desktop, Laptop, Widescreen, Pc, Interaksjon design, Interaction design, UX design, IxD, UI design, Prototype, Wireframe, Adobe xd, Php, Javascript, Css, Sass, Html, Bootstrap, Wordpress, Microsoft office, Excel , Adobe xd, Photoshop, Illustrator, Emilie, Tønnessen, Tonnessen, Kathenes, Henriette, Emilie Henriette Kathenes Tønnessen, Emilie Henriette Tønnessen, Emilie Tonnessen">
    <meta name="keywords"
        content="Emilie Tønnessen er en 25 år gammel Junior Frontend Utvikler fra småbyen Risør. Fokuset hennes er på å designe og utvikle hjemmesider for små og lokale firmaer som enten trenger å få oppdatert en utdatert nettside eller lage en nettside fra bunnen av. Emilie leverer smakfullt og brukervennlig design, som setter firmaets merkevare i sentrum.">

    <!-- Bootstrap: -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <!-- Adobe Fonts: -->
    <link rel="stylesheet" href="https://use.typekit.net/nnq4wta.css">

    <!-- Font Awesome: -->
    <script src="https://kit.fontawesome.com/0011017bbe.js" crossorigin="anonymous"></script>

    <!-- CSS: -->
    <link rel="stylesheet" href="./css/style.css">

    <!-- Page Icon: -->
    <link rel="icon" href="./graphics/logo-icon.png" type="image/gif" sizes="16x16">

    <!-- Page Title: -->
    <title>Emilie Tonnessen | Contact</title>
</head>
<body>
    <!-- Wrapper: -->
    <div class="wrapper">
        <!-- Navigation: -->
        <nav class="nav">
            <div class="container">
                <div class="row">

                    <!-- Brand -->
                    <a href="./index.html" class="nav__brand col">
                        <div class="nav__brand__first-name">Emilie</div>
                        <div class="nav__brand__last-name">Tønnessen</div>
                    </a>

                    <!-- Menu -->
                    <ul class="nav__list nav__list--dark col-12">
                        <li class="nav__item">
                            <a href="./portfolio.html" class="nav__link nav__link--dark">Portfolio</a>
                        </li>
                        <li class="nav__item">
                            <a href="./about.html" class="nav__link nav__link--dark">About</a>
                        </li>
                        <li class="nav__item">
                            <a href="./contact.html" class="nav__link nav__link--active nav__link--dark">Contact</a>
                        </li>
                    </ul>
                    
                    <!-- Decoration: -->
                    <div class="nav__decor nav__decor--dark col-12">
                        <div></div>
                    </div>
                
                </div>
            </div>
        </nav>

        <!-- Header: -->
        <header class="header">
            <h1 class="header__headline">
                lets have a chat!
            </h1>
        </header>

        <main class="main">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2 class="header__subline">Free Consultation</h2>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi modi tenetur commodi odit, provident harum ad? Rem nulla fuga assumenda mollitia odio laborum quos dicta id. Cum, repellendus eaque
                        </p>

                        <h2 class="header__subline">Non-Binding</h2>
                        <p class="paragraph"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi modi tenetur commodi odit, provident harum
                            ad? Rem nulla fuga assumenda mollitia odio laborum quos dicta id. Cum, repellendus eaque
                        </p>
                    </div>

                    <!-- Contact Form: -->
                    <form method="post" action="./contact.php"  id="contact-form" class="col-6 row contact-form">

                        <!-- Feedback: -->
                        <div class="feedback">
                            <?php
                                if($message_sent){
                                    echo("<div class='feedback--success'>Thank you for contacting me, I will reach back to you as soon as possible!</div>");
                                } else{
                                    echo("<div class='feedback--error'>Something went wrong. and the mail was not sent. Please try again!</div>");
                                }
                            ?>
                        </div>

                        <!-- Name: -->
                        <section class="col-12 contact-form__section">
                            <label for="name" class="contact-form__label">Name: </label>
                            <input name="name" id="name" class="contact-form__input" type="text">
                            <div class="contact-form__error contact-form__error--name">
                                <i class="fal fa-exclamation-triangle"></i> Please enter your name
                            </div>
                        </section>

                        <!-- Email: -->
                        <section class="col-12 contact-form__section">
                            <label for="email" class="contact-form__label">Email: </label>
                            <input name="email" id="email" class="contact-form__input" type="text">
                            <div class="contact-form__error contact-form__error--email">
                                <i class="fal fa-exclamation-triangle"></i> Please enter a valid email address
                            </div>
                        </section>

                        <!-- Topic: -->
                        <section class="col-12 contact-form__section">
                            <label for="topic" class="contact-form__label">Topic: </label>
                            <input name="topic" id="topic" class="contact-form__input" type="text">
                            <div class="contact-form__error contact-form__error--topic">
                                <i class="fal fa-exclamation-triangle"></i> Please enter a topic
                            </div>
                        </section>

                        <!-- Message -->
                        <section class="col-12 contact-form__section">
                            <label for="message" class="contact-form__label">Topic: </label>
                            <textarea name="message" id="message" class="contact-form__textarea" type="text"></textarea>

                            <div class="contact-form__error contact-form__error--message">
                                <i class="fal fa-exclamation-triangle"></i> Please write a longer message
                            </div>
                        </section>

                        <!-- Submit Button: -->
                        <div class="col-12 contact-form__section">
                            <input name="submit" type="submit" class="submit contact-form__submit btn btn--primary" value="SEND">
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>

    <!-- Footer: -->
    <footer class="footer">
        <div class="footer__content">
            <p class="footer__text">
                20201 © Emilie Tønnessen. All rights reserved
            </p>
        </div>
    </footer>

    <!-- JavaScript: -->
    <script src="./js/contact.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>
</body>
</html>