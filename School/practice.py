import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# ファイルを読み込む
df = pd.read_excel('./データ_アグニス　全部.xlsx.xlsx')  # ファイル名に置き換えてください

# 説明変数を抽出
X = df.drop('target_variable', axis=1)  # 目的変数のカラム名に置き換えてください

# データを標準化する
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCAを実行する
pca = PCA(n_components=2)  # 主成分数を2に設定
principalComponents = pca.fit_transform(X_scaled)

# 主成分をデータフレームに変換
principalDf = pd.DataFrame(data=principalComponents, columns=['principal component 1', 'principal component 2'])

# 結果を表示
print(principalDf)