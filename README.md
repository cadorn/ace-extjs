ACE Editor as ExtJS Component
=============================

Status: dev

This project packages the [ACE Editor](http://ace.ajax.org/) as an [ExtJS](http://www.sencha.com/products/extjs/) component.

![Screenshot](https://github.com/cadorn/ace-extjs/raw/master/docs/images/screenshot_1.png)

The [PINF JavaScript Loader](https://github.com/pinf/loader-js) is used to provide a development environment and package releases for this project.

**NOTE:** It is assumed you have the _PINF JavaScript Loader_ mapped to the `commonjs` command are are using the `node` platform by default as explained [here](https://github.com/pinf/loader-js/blob/master/docs/Setup.md).


Demo / Development
==================

    git clone git://github.com/cadorn/ace-extjs.git
    cd ace-extjs
    commonjs -v ./

TODO
----

  * Toolbar for editor component
  * Footer for editor component (line wrapping, caret position, read only, charset, ...)
  * Persist editor styling to survive reload
  * Document API
  * ACE Command-line support
  * ExtJS 4 support/demo (__cadorn__)
  * Bundeling for production loading (__cadorn__)


API
===

_TODO_


Support & Feedback
==================

Please use github features for now.


Contribute
==========

Collaboration Platform: [https://github.com/cadorn/ace-extjs/](https://github.com/cadorn/ace-extjs/)

Collaboration Process:

  1. Send message to discuss your change
  2. Write a patch on your own
  3. Send pull request on github
  4. Discuss pull request on github to refine

You must explicitly license your patch by adding the following to the top of any file you modify
in order for your patch to be accepted:

    //  - <GithubUsername>, First Last <Email>, Copyright YYYY, MIT License


Author
======

This project is maintained by [Christoph Dorn](http://www.christophdorn.com/).


Credits
=======

This project would not be possible without the following:

  * [ACE Editor](http://ace.ajax.org/)
  * [ExtJS](http://www.sencha.com/products/extjs/)
  * [PINF JavaScript Loader](https://github.com/pinf/loader-js)


Documentation License
=====================

[Creative Commons Attribution-NonCommercial-ShareAlike 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)

Copyright (c) 2011 [Christoph Dorn](http://www.christophdorn.com/)


Code License
============

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2011 [Christoph Dorn](http://www.christophdorn.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
