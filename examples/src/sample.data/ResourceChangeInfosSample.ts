import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

export const requestResourceChangeInfo: model.ResourceChangeInfosRequest[] = [
  {
    ChangeObjectType: 3 as model.ObjectType,
    UniqueCode: "UniqueCode",
    SeqCode: 2,
    Name: "Name",
    TargetUniqueCode: "TargetUniqueCode",
    TargetSeqCode: "TargetSeqCode",
    TargetName: "TargetName",
    ResourceChangeStateType: 1 as model.ChangeActType,
    BeforeLevel: "1",
    AfterLevel: "2",
    BeforeLevelDesc: "BeforeLevelDesc",
    AfterLevelDesc: "AfterLevelDesc",
    ChangeResultType: 1 as model.ResultType,
    MoneyCode: "MoneyCode",
    MoneyName: "MoneyName",
    MoneyAmount: 100,
  },
];
