## UPCRM

![alt text](./Screenshot.png?raw=true "UPCRM")

* Built on ESPOCRM

### Requirements

* PHP 5.6 or above (with pdo, json, gd, openssl, zip, imap, mbstring, curl extensions);
* MySQL 5.1 or above.
* BackBone: http://backbonejs.org/
* Handlebars: http://handlebarsjs.com/expressions.html

### How to get started (for developers)

1. Clone repository to your local computer.
2. Change to the project's root directory.
3. Install [composer](https://getcomposer.org/doc/00-intro.md).
4. Run `composer install` if composer is installed globally or `php composer.phar install` if locally.

Never update composer dependencies if you are going to contribute code back.

Now you can build. Build will create compiled css files.

To compose a proper config.php and populate database you can run install by opening `http(s)://{YOUR_CRM_URL}/install` location in a browser. Then open `data/config.php` file and add `isDeveloperMode => true`.

### How to build

You need to have nodejs and Grunt CLI installed.

1. Change to the project's root directory.
2. Install project dependencies with `npm install`.
3. Run Grunt with `grunt`.
4. Go to Administrator -> Rebuild

The build will be created in the `build` directory.

### How to make a translation

Build po file with command:
`node po.js en_EN`
(specify needed language instead of en_EN)

After that translate the generated po file.

Build json files from the translated po file:

1. Put your po file espocrm-en_EN.po into `build` directory
2. Run `node lang.js en_EN`

Json files will be created in build directory grouped by folders.

### License

UP5TECH-CRM is published under the GNU GPLv3.
