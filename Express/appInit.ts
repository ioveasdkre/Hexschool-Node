import express from "express";
const app = express();

// : 動態參數
app.get("/user/:name", function (req, res) {
  const myName = req.params.name; // req.params 讀取動態參數
  const limit = req.query.limit; // req.query 讀取參數
  const q = req.query.q;

  if (myName !== "tom") {
    res.send(
      "<html><head></head><body><h1>" + "查無此人" + "</h1></body></html>"
    );
  } else {
    res.send(
      "<html><head></head><body><h1>" +
        myName +
        "想要找關鍵字叫做" +
        q +
        "的資料" +
        "是要找前" +
        limit +
        "筆資料" +
        "</h1></body></html>"
    );
  }
});

const port = process.env.PORT || 3000; // 環境變數如果存在則以環境變數為 port反之為 3000

console.log(port);

app.listen(port);
