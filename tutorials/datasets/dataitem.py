#!/usr/bin/env python
from subprocess import call
from os import path

class DataItem(object):
    """A class that makes downloading data from the web easy.

    Attributes
    ----------
    web_url : str
        Indicates the path to the data

    filename : str (default=None)
        Indicates what the file should be named when saved
        to disk. If None, leaves the name to be the name of the
        downloaded file.

    """

    def __init__(self, web_url, filename=None):
        self.web_url = web_url
        self.filename = filename

    def __repr__(self):
        return "{'url': {0}, 'filename': {1}".format(self.web_url, self.filename)

    def postprocessing_step(postprocess):
        pass

    @staticmethod
    def from_json(filename):
        assert type(filename) is str
        pass # TODO

    def download(self, overwrite=True):
        save_file = "-O " + self.filename if self.filename is not None else ""
        #verbosity = "-q" if not verbose else ""
        print "Downloading {0}".format(self.filename)
        if path.exists(self.filename):
            call("rm " + self.filename, shell=True)
        retval = call("wget -q {0} {1}".format(save_file, self.web_url),
                      shell=True)
        if retval != 0:
            raise ValueError("File {0} could not be downloaded.\nInput URL: {1}"
                             .format(self.filename, self.web_url))

