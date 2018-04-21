import pandas as pd
import numpy as np
import constants as c
import glob as glob

def readAllFiles():
    files = glob.glob(c.ALL_FILES)
    frames = []

    for file in files:
        df = pd.read_csv(file, index_col = 0)
        frames.append(df)

    return pd.concat(frames)

def readOneFile(url):
    return pd.read_csv(url, index_col = 0)

def exportDfToCsvFiles(df):
    step = 1000000
    start = 0
    stop = step
    i = 0

    while start < len(df):
        if stop >= len(df):
            stop = len(df)
        fileName = c.BASIC_PATH +  'flights_2010_' + str(i) + '.csv'
        
        data = df.iloc[start:stop, 0:]
        data.to_csv( fileName, sep=',')

        start += step
        stop += step
        i += 1


df = readAllFiles()
# print(df)
df.info()
# print(df.describe())
exportDfToCsvFiles(df)