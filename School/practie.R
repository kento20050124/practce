# データを読み込む
data <- read.csv("School/データ_アグニス　全部.xlsx", header = TRUE, row.names = 1)

# 主成分分析を実行する
pca <- princomp(data, cor = TRUE)

# 結果を表示する
summary(pca)