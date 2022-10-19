import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

export const requestBuyInfo: model.BuyInfosRequest[] = [
  {
    OrderNO: "OrderNO",
    GoodsCode: "GoodsCode",
    PayPurchaseType: 3 as model.PurchaseType,
    ItemCode: "ItemCode",
    ItemName: "ItemName",
    Amount: 100,
    CurrencyCode: 5 as model.CurrencyType,
    TotalPrice: 100.99,
    PayToolCode: 0 as model.ToolCodeType,
    Sdate: "YYYY-MM-DD HH:mm:ss",
    Edate: "YYYY-MM-DD HH:mm:ss",
    ReceiveMemberID: "ReceiveMemberID",
    Balance: 100,
    PayResultType: 1 as model.ResultType,
    PayResultMessage: "PayResultMessage",
  },
];
