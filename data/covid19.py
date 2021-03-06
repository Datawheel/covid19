#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import datetime as dt


# In[2]:


regions_id = {
            "Arica y Parinacota":15,
            "Tarapacá":1,
            "Antofagasta":2,
            "Atacama":3,
            "Coquimbo":4,
            "Valparaíso":5,
            "Metropolitana":13,
            "O’Higgins":6,
            "Maule":7,
            "Ñuble":16,
            "Biobío":8,
            "Araucanía":9,
            "Los Ríos":14,
            "Los Lagos":10,
            "Aysén":11,
            "Magallanes":12
            }

regions_pob = {
            "Arica y Parinacota":252110,
            "Tarapacá":382773,
            "Antofagasta":691854,
            "Atacama":314709,
            "Coquimbo":836096,
            "Valparaíso":1960170,
            "Metropolitana":8125072,
            "O’Higgins":991063,
            "Maule":1131939,
            "Ñuble":511551,
            "Biobío":1663696,
            "Araucanía":1014343,
            "Los Ríos":405835,
            "Los Lagos":891440,
            "Aysén":107297,
            "Magallanes":178362
            }

today = dt.date.today()
start_day = dt.date(2020, 3, 3)
diff = today - start_day
days = diff.days
dates = pd.date_range("2020-03-03", periods=days+1, freq="D")
dates = pd.Series(dates).astype(str)


# In[6]:


data = []
for date in dates: 
    
    url = "https://storage.googleapis.com/covid19chile/Chile/covid19_chile_{}.csv?f=f".format(date)
    try:
        try:
            df = pd.read_csv(url, sep=";", encoding="utf-8")

        except:
            df = pd.read_csv(url, sep=";", encoding="latin-1")

        if "fallecidos_nuevos" not in list(df):
            df["fallecidos_nuevos"] = 0
        
        if "fallecidos_totales" not in list(df):
            df["fallecidos_totales"] = 0
    

        df = df[df["region"]!="Total"]
        df["region_id"] = df["region"].replace(regions_id)
        df["region_pob"] = df["region"].replace(regions_pob).astype(int)  
        df["fecha"] = df["fecha"].str.replace("-", "/")
        df = df.rename(columns={"casos_nuevos":"confirmados", "casos_totales":"casos_acum", "fallecidos_totales":"fallecidos_acum"})
        df["total_cada_100mil"] = (df["casos_acum"]/df["region_pob"])*100000
        df = df.drop(columns={"casos_recuperados", "region_pob"})
        df["recuperados"] = np.nan

        if date == "2020-03-03":
            df.loc[df["region"] == "Maule", ["confirmados"]] = 1

        data.append(df)
        
    except:
        pass

data = pd.concat(data, sort=False)

update = data.fecha.max()
update = pd.to_datetime(update)

output = {
    "data": data.to_dict(orient="records"),
    "source": "https://github.com/itoledor/coronavirus",
    "updated": update.strftime("%d-%m-%Y")
}

import simplejson as json
with open("data_covid19.json", "w") as outfile:
    json.dump(output, outfile, ignore_nan=True)


# In[9]:


data2 = data.copy()
data2 = data2.groupby("fecha").sum().reset_index()
data2["region"] = "Chile"
data2["region_id"] = 0
data2["recuperados"] = np.nan
data2["pob_nacional"] = 19458310
data2["total_cada_100mil"] = (data2["casos_acum"]/data2["pob_nacional"])*100000

data2 = data2.drop(columns={"pob_nacional"})

days1 =[]
for i in range (1,len(data2)+1):
    days_ = i
    days1.append(days_)
    
data2["days"] = days1

output2 = {
    "data": data2.to_dict(orient="records"),
    "source": "https://github.com/itoledor/coronavirus",
    "updated": update.strftime("%d-%m-%Y")
}

import simplejson as json
with open("covid19_nacional.json", "w") as outfile:
    json.dump(output2, outfile, ignore_nan=True)


# In[10]:


days =[]
for a, df_a in data.groupby("region"):
    default = 0
    for row in df_a.itertuples():
        if row.casos_acum!=0:
            default = default + 1
            
        days.append(default)
        
data1 = data.sort_values(by=['region', 'fecha'])

data1["days"] = days

output1 = {
    "data": data1.to_dict(orient="records"),
    "source": "https://github.com/itoledor/coronavirus",
    "updated": update.strftime("%d-%m-%Y")
}

import simplejson as json
with open("dias_covid19.json", "w") as outfile:
    json.dump(output1, outfile, ignore_nan=True)


# In[15]:


data1[data1["region"]=="Metropolitana"]


# In[ ]:




