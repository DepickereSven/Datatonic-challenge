import pandas as pd
import numpy as np

df = pd.read_csv('../../Initial_Data/Unzipped/flights_2010_000000000000/flights_2010_000000000000', index_col = 0)
print(df)
df.info()
print(df.describe())