import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

//Gain of game money - Gain cash equivalents as mission rewards
export const requestVMoneyChangeInfos: model.VMoneyChangeInfosRequest[] = [
  {
    MoneyFlowType: 1 as model.FlowType,
    MoneyName: "TEST_MONEY",
    MoneyChangeType: 14 as model.MoneyChangeType,
    MoneyChangeDetail: "GET",
    ContentName: "stagename",
    ContentCode: "satgecode",
    MoneyType: 0 as model.MoneyType,
    Amount: 10000,
    HoldAmount: 1000,
    MoneyChangeName: "YAM",
  },
  {
    MoneyFlowType: 1 as model.FlowType,
    MoneyName: "TEST_MONEY2",
    MoneyChangeType: 14 as model.MoneyChangeType,
    MoneyChangeDetail: "GET",
    ContentName: "stagename2",
    ContentCode: "satgecode2",
    MoneyType: 0 as model.MoneyType,
    Amount: 10000,
    HoldAmount: 1000,
    MoneyChangeName: "YAM2",
  },
];
