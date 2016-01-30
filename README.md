# ADSA Data Summit 2016

## Installing Git

* Windows: Follow the installation guide
  [here](https://confluence.atlassian.com/bitbucket/set-up-git-744723531.html).

* Linux and OS X: `git` should be installed by default.

## Recommended Software Packages for Python 2.7

Throughout the week, we'll be holding tutorials to help you
get started with the data competitions. We recommend you install
the following software for python.

* Linux and Mac OS X: We recommend the following Python packages:
    * numpy>=1.6.1
    * scipy>=0.9
    * scikit-learn>=0.15
    * pandas>=0.17
    * ipython>=3.0
    * matplotlib >= 1.5

  You can install all of these using
```
pip install -U -r requirements.txt
```
  Note that some of these packages (scipy, pandas, and matplotlib) may take
  hours to install. Avoid installing these packages minutes before the
  tutorials.

  If you run into difficulties installing scipy because of libblas or lapack,
  please follow the stackoverflow post
  [here]("http://stackoverflow.com/questions/7496547/does-python-scipy-need-blas").

  Alternatively, you may use anaconda to install the python scientific
  stack on your machine. (See below.)

* Windows: Install Anaconda for python [here]("https://www.continuum.io/downloads").
  The full package
  list installed by Anaconda is [here]("http://docs.continuum.io/anaconda/pkg-docs").

Run the following commands to ensure that the packages were installed
correctly:
```
$ python check_env.py
$ ipython notebook      # Launches Jupyter server
```
Please let us know if these checks are not thorough enough,
or more software dependencies need to be installed.
