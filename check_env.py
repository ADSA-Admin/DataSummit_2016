from __future__ import print_function

# Script taken from:
# https://github.com/amueller/scipy_2015_sklearn_tutorial/
#
# Updated 1/29/2016 for the purposes of ADSA

try:
    import curses
    curses.setupterm()
    assert curses.tigetnum("colors") > 2
    OK = "\x1b[1;%dm[ OK ]\x1b[0m" % (30 + curses.COLOR_GREEN)
    FAIL = "\x1b[1;%dm[FAIL]\x1b[0m" % (30 + curses.COLOR_RED)
except:
    OK = '[ OK ]'
    FAIL = '[FAIL]'


import sys
try:
    import importlib
except ImportError:
    print(FAIL, "Python version 3.4 (or 2.7) is required, but %s is installed." % sys.version)
from distutils.version import LooseVersion as Version


def import_version(pkg, min_ver, fail_msg=""):
    mod = None
    try:
        mod = importlib.import_module(pkg)
        # workaround for Image not having __version__
        version = getattr(mod, "__version__", 0) or getattr(mod, "VERSION", 0)
        if Version(version) < min_ver:
            print(FAIL, "%s version %s or higher required, but %s installed."
                  % (lib, min_ver, version))
        else:
            print(OK, '%s version %s' % (pkg, version))
    except ImportError:
        print(FAIL, '%s not installed. %s' % (pkg, fail_msg))
    return mod


# first check the python version
print('Using python in', sys.prefix)
print(sys.version)
pyversion = Version(sys.version)
if pyversion >= "3":
    if pyversion < "3.4":
        print(FAIL, "Python version 3.4 (or 2.7) is required, but %s is installed." % sys.version)
elif pyversion >= "2":
    if pyversion < "2.7":
        print(FAIL, "Python version 2.7 is required, but %s is installed." % sys.version)
else:
    print(FAIL, "Unknown Python version: %s" % sys.version)

print()
requirements = {'numpy': "1.6.1", 'scipy': "0.9", 'matplotlib': "1.0",
                'IPython': "3.0", 'sklearn': "0.15"}

# now the dependencies
for lib, required_version in list(requirements.items()):
    import_version(lib, required_version)

# # pydot is a bit different
# import_version("pydot", "0", fail_msg="pydot is not installed. It is not required "
#                "but you will miss out on some plots. \nYou can install it using "
#                "'pip install pydot' on python2, and 'pip install "
#                "git+https://github.com/nlhepler/pydot.git' on python3.")
#
# import_version("Image", "0", fail_msg="The Image module is not installed."
#                " Please install the Pillow package, which provides it.")
