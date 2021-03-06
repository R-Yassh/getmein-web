const createMail = function (username, email) {
  return `
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                <title>Welcome to IIITV Organization</title>
                <!-- Stylesheet -->
                <style type='text/css'>
                * {
                    margin: 0px;
                }
                
                #root {
                    width: 100%;
                }
                
                body {
                    color: rgb(68, 68, 68);
                    -webkit-font-smoothing: antialiased;
                    text-shadow: rgba(0,0,0,.01) 0 0 1px;
                    transition: 0.1s linear;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }
                
                #header {
                    width: 100%;
                }
                
                #brand-logo {
                    width: 75px;
                }
                
                #brand-logo-cont {
                    width: max-content;
                    margin: 0 auto;
                }
                
                h2, p, h3, h4 {
                    text-align: center;
                }
                
                .divider {
                    width: 45%;
                    margin: 15px auto;
                }
                
                main, footer {
                    width: 60%;
                    margin: 0 auto;
                    padding: 10px;
                    text-align: center;
                }
                
                #verify {
                    display: block;
                    padding: 10px 20px;
                    background-color: rgb(43, 150, 43);
                    border: 0px;
                    border-radius: 3px;
                    color: white;
                    font-weight: bold;
                    font-size: 17px;
                    margin: 20px auto;
                    box-shadow: 3px 3px 20px 0px grey;
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>Welcome to IIITV Organization</title>
    <!-- Stylesheet -->
    <style type='text/css'>
        * {
            margin: 0px;
        }
        
        .logo {
            width: 200%;
            height: 200%;
        }
        
        #root {
            width: 100%;
        }
        
        body {
            color: rgb(68, 68, 68);
            -webkit-font-smoothing: antialiased;
            text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
            transition: 0.1s linear;
            font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        }
        
        #header {
            width: 100%;
        }
        
        #brand-logo {
            width: 75px;
        }
        
        #brand-logo-cont {
            width: max-content;
            margin: 0 auto;
        }
        
        h2,
        p,
        h3,
        h4 {
            text-align: center;
        }
        
        .divider {
            width: 20%;
            margin: 5px auto;
        }
        
        main,
        footer {
            width: 60%;
            margin: 0 auto;
            padding: 10px;
            text-align: center;
        }
        
        #verify {
            display: block;
            padding: 10px 20px;
            background-color: rgb(43, 150, 43);
            border: 0px;
            border-radius: 3px;
            color: white;
            font-weight: bold;
            font-size: 17px;
            margin: 20px auto;
            /*box-shadow: 3px 3px 20px 0px grey;*/
            width: max-content;
            text-decoration: none;
        }
        
        #verify:hover {
            box-shadow: 3px 3px 20px 2px grey;
            cursor: pointer;
            background-color: rgb(46, 196, 0);
        }
        
        #verify:active {
            box-shadow: 3px 3px 20px 0px grey;
            cursor: pointer;
            background-color: rgb(18, 77, 0);
        }
        
        .social-link {
            text-decoration: none;
            font-size: 15px;
            color: rgb(38, 102, 141);
        }
        
        .image {
            margin-top: 10px;
            width: 35px;
            height: 35px;
        }
        
        .image:hover {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            box-shadow: 3px 3px 20px 2px grey;
            overflow: hidden;
        }
        
        .divide {
            margin-left: -5px;
            margin-right: -5px;
            width: 15px;
            height: 35px;
        }
    </style>
</head>

<body>
    <div id='root'>
        <div id='header'>
            <div id='brand-logo-cont'>
                <img id='brand-logo' src='https://github.com/iiitv/bitSetGo/blob/master/logo_trans.png?raw=true' alt='IIITV Organization Logo' class="logo">
            </div>
            <h2>Welcome to IIITV Open Source<br>Organization</h2><br>
        </div>
        <hr class='divider' />
        <main>
            <h3>We're glad to have you with us, ${username}!</h3>
            <br>
            <p>Click on the button below to verify you e-mail ID,<br>and you are good to go!</p>
            <a href='${email}' id='verify'>Verify e-mail</a>
            <p>With regards,<br>IIITV Open Source Organization</p>
        </main>
        <hr class='divider' />
        <footer>
            <h4>Find us on</h4>
            <a target='_blank' class='social-link' href='https://www.facebook.com/iiitvcc/'>
                <img src='https://image.flaticon.com/icons/svg/124/124010.svg' class='image'>
            </a>
            <img src="https://img.icons8.com/ios/50/000000/thick-vertical-line-filled.png" class='divide'>
            <a target='_blank' class='social-link' href='https://twitter.com/iiitvcc'>
                <img src='https://image.flaticon.com/icons/svg/124/124021.svg' class='image'>
            </a>
            <img src="https://img.icons8.com/ios/50/000000/thick-vertical-line-filled.png" class='divide'>
            <a target='_blank' class='social-link' href='https://www.linkedin.com/company/iiitvcc/'>
                <img src='https://image.flaticon.com/icons/svg/124/124011.svg' class='image'>
            </a>
            <br><br>
            <font size="0.5">If you have any questions, you can contact us at : <a href="mailto:codingclub@iiitvadodara.ac.in">codingclub@iiitvadodara.ac.in</a></font>

        </footer>
    </div>
</body>

</html>
    `;
};

module.exports.createMail = createMail;
