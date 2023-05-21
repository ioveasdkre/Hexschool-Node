import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./routes/user";

const app = express();
const login = function (req: Request, res: Response, next: NextFunction) {
  const _url = req.url;
  if (_url !== "/") {
    next(); // 進入下一步，若不設定會卡住。
  } else {
    res.status(400).send("你的登入資料有錯");
  }
};

// console.log(app);

app.use("/user", login, userRouter);

app.use(function (_req, _res, next) {
  console.log("我要進來搂");
  next(); // 進入下一步，若不設定會卡住。
});

// 處理 404
app.use(function (_req, res, _next) {
  res.status(404).send("抱歉，您的頁面找不到");
});

// 處理程式碼出錯，防止錯誤訊息讓使用者看見
app.use(function (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err?.stack);
  res.status(500).send("伺服器繁忙中，請稍後在試");
});

const port = process.env.PORT || 3000; // 環境變數如果存在則以環境變數為 port反之為 3000

console.log(port);

app.listen(port);
