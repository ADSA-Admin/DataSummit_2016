#!/usr/bin/env python
from dataitem import DataItem

urls = ["https://archive.ics.uci.edu/ml/machine-learning-databases/mushroom/agaricus-lepiota.data",
        "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data",
        "https://archive.ics.uci.edu/ml/machine-learning-databases/liver-disorders/bupa.data",
        "https://archive.ics.uci.edu/ml/machine-learning-databases/undocumented/connectionist-bench/sonar/sonar.all-data"
        ]
names = ["mushroom.data", "breast.data", "liver.data", "sonar.data"]

items = [DataItem(url, name) for url, name in zip(urls, names)]
for item in items: item.download()

