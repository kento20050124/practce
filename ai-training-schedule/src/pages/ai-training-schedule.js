import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Component() {
  const schedule = [
    {
      day: "1日目",
      duration: "2時間",
      topics: [
        "生成AIに触れる必要性",
        "なぜAIの導入が進まないのか",
        "そもそもChatGPTとは",
        "作成したチャットボットについて",
        "生成AIでできること1000本ノック"
      ],
      task: "1000本ノックを聞いて自分たちの業務でどこにAIが使えるか洗い出してくる。"
    },
    {
      day: "2日目",
      duration: "2時間",
      topics: [
        "イントロダクション",
        "LLMとはどんなものか",
        "LLMを使う上で気を付けること",
        "LLMの応用例"
      ],
      task: "1日目で出した業務のコツやルールを検索しAIや文章生成AIを使用してリストアップしてくる。"
    },
    {
      day: "3日目",
      duration: "2時間",
      topics: [
        "プロンプトの重要性",
        "プロンプト設計のコツ7選",
        "アジャイル（対話）型プロンプト",
        "構造化型プロンプト",
        "便利なプロンプト集10選",
        "実際にプロンプトを作る"
      ],
      task: "1日目で洗い出した業務を2日目でリストアップしたコツを考慮しながらプロンプトを作成。"
    },
    {
      day: "4日目",
      duration: "2時間",
      topics: [
        "GPTsとは",
        "GPTsの特徴",
        "便利なGPTs10選の紹介と実践",
        "GPTsの作り方",
        "GPTsを作成してみよう"
      ],
      task: "便利なGPTsを3つ選択して作成。3日目に作成したプロンプトをGPTsに入れて簡易GPTsを作成してくる。"
    },
    {
      day: "5日目",
      duration: "2時間",
      topics: [
        "イベントアイデア出しGPTｓの作成",
        "公式LINE文書作成補助GPTsの作成",
        "専門的加筆作成補助GPTsの作成",
        "ゲーム作成体験会を実施したときの感想とコツ",
        "漫画作成体験会を実施したときの感想とコツ"
      ],
      task: "各自で子供向け生成AI研修（ゲームコース）を実践できるようにする。"
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">AI Training Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Day</TableHead>
              <TableHead className="w-[100px]">Duration</TableHead>
              <TableHead>Topics</TableHead>
              <TableHead>Task</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((day, index) => (
              <TableRow key={index} className="border-b border-gray-200 dark:border-gray-700">
                <TableCell className="font-medium">{day.day}</TableCell>
                <TableCell>{day.duration}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>{day.task}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
