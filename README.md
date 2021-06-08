## 概要

Sonar Cloudを使って、静的解析やテストカバレッジの表示などを行うための、テストリポジトリ

### 使用ツール
- SonarCloud 
- CircleCI
- mochaとnycを用いてテスト実行とtestカバレッジ出力

## SonarCLoud

SonarクラウドでPR作成したときに、静的解析が行われる。
Testカバレッジの取得もできるようにしたい

## CircleCI
`.circleci/config.yml` でワークフローを定義していて、現状テストの実行をしている

## mochaとnyc
testカバレッジの取得はなんとなく、`nyc` を使っている。これはSonarCloudの相性などを考えて要検討。