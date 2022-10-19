# coresight-typescript-sdk

## Introduction

javascript sdk for coresight analysis integration


## Installing

```
npm install coresight-gamereport-ts-sdk
```

## Client

```typescript
import StorageCoreApi from "coresight-gamereport-ts-sdk/lib";
import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

const constructorParams: model.ConstructorModel = {
  Url: "API-URL",
  AuthKey: "AUTH KEY",
  TargetVer: "APP VERSION",
  ChannelCode: "CHANNEL CODE",
  ChannelID: "CHANNEL ID",
  MemberID: "MEMBER ID",
  CharID: "MEMBER CHARACTER ID",
  NickName: "MEMBER NICKNAME",
  ContryCode: "KOR",
  OSType: "ANDROID OR IOS",
  OSVersion: "OS VERSION",
  DeviceKey: "DEVICE-KEY",
  DeviceModel: "IPHONE 14",
  IPAddress: "0.0.0.0",
};

//Create SDK instance
const storageCoreApi = new StorageCoreApi(constructorParams);

```

## Examples

### Instance Set Value

```typescript

//Set Account level - Used when there is a change after the initial object creation
storageCoreApi.SetAccountLevel(50);

//Set character ID - Used when there is a change after the initial object creation
//Set your character ID to "7777777"
storageCoreApi.SetCharacterID("77777777");

//Account ID Settings - Used when there is a change after the initial object creation
//Set memberId to "MID0000007"
storageCoreApi.SetMemberID("MID0000007");

//Set Account Nickname - Used when there is a change after the initial object creation
//Set your account nickname to "IronMan"
storageCoreApi.SetNickName("IronMan");

//Set Channel Id (ID issued by SNS authentication or self-certification)
//Set channel ID to "0000001234567"
storageCoreApi.SetChannelID("0000001234567");

//Set Channel Code (Platform codes such as Google, Apple, etc.)
//Set the channel code to "GOOGLE".
storageCoreApi.SetChannelCode("MarketPlace");
```

### Acquisition of game money

```typescript

const requestVMoneyChangeInfos: model.VMoneyChangeInfosRequest[] = [
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

storageCoreApi.VMoneyChangeInfos(requestVMoneyChangeInfos);
```

### Game installation success transfer

```typescript

const requestGameInstallSuccessInfo: model.InstallInfosRequest[] = [
  {
    AppInstallType: 0 as model.InstallType,
    ReferrerURL: "",
    APPVersion: "1.0.0.0",
    DeviceInstallStateType: 1 as model.StateType,
    DeviceInstallResult: 1 as model.ResultType,
    InstallErrorMessage: "errorMessage",
    PushToken: "",
  },
];

storageCoreApi.InstallInfos(requestGameInstallSuccessInfo);
```

### Game installation success transfer

```typescript

const requestGameInstallSuccessInfo: model.InstallInfosRequest[] = [
  {
    AppInstallType: 0 as model.InstallType,
    ReferrerURL: "",
    APPVersion: "1.0.0.0",
    DeviceInstallStateType: 1 as model.StateType,
    DeviceInstallResult: 1 as model.ResultType,
    InstallErrorMessage: "errorMessage",
    PushToken: "",
  },
];

storageCoreApi.InstallInfos(requestGameInstallSuccessInfo);
```


### Send successful account creation after installing the game

```typescript
const requestAccountCreateSuccessInfo: model.InstallInfosRequest[] = [
  {
    AppInstallType: 1 as model.InstallType,
    ReferrerURL: "",
    APPVersion: "1.0.0.0",
    DeviceInstallStateType: 1 as model.StateType,
    DeviceInstallResult: 1 as model.ResultType,
    InstallErrorMessage: "errorMessage",
    PushToken: "",
  },
];

storageCoreApi.InstallInfos(requestAccountCreateSuccessInfo);
```


### Send game login log
```typescript
const requestGameLoginInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 0 as model.ConnectType,
    contentName: "StageName",
    entryType: 0 as model.FlowType,
  },
  {
    connectType: 0 as model.ConnectType,
    contentName: "StageName",
    entryType: 0 as model.FlowType,
  },
];

storageCoreApi.ConnectInfos(requestGameLoginInfo);
```

### Send game logout log
```typescript
const requestGameLogOutInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 0 as model.ConnectType,
    contentName: "StageName",
    entryType: 1 as model.FlowType,
  },
];

storageCoreApi.ConnectInfos(requestGameLogOutInfo);
```

### Content (various game content-stage, PVP, dungeon, etc.) entry log transmission
```typescript
const requestGameContentsEntranceInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 1 as model.ConnectType,
    contentName: "StageName",
    entryType: 0 as model.FlowType,
  },
];

storageCoreApi.ConnectInfos(requestGameContentsEntranceInfo);
```

### Contents (various game contents-stage, PVP, dungeon, etc.) Send exit log
```typescript
const requestGameContentsExitInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 1 as model.ConnectType,
    contentName: "StageName",
    entryType: 1 as model.FlowType,
  },
];

storageCoreApi.ConnectInfos(requestGameContentsExitInfo);
```



### Send content result log
```typescript
const requestContentActInfo: model.ContentActInfosRequest[] = [
  {
    StageType: 0 as model.StageType,
    StageName: "",
    IsAuto: 0 as model.AutoType,
    StageGrade: "3",
    StageResultGrade: "3",
    StagePlayTime: 180,
    StageResult: 1 as model.ResultType,
    StagePartnersInfo: [
      {
        PartnerType: 2 as model.PartnerType,
        MemberID: "M1000",
        PartnerID: "M10002",
        PartnerLevel: 150,
        PartnerCharUQCode: "123",
        PartnerHP: 0,
        PartnerMP: 0,
      },
      {
        PartnerType: 2,
        MemberID: "M1000",
        PartnerID: "M10001",
        PartnerLevel: 150,
        PartnerCharUQCode: "123",
        PartnerHP: 0,
        PartnerMP: 0,
      },
    ],
    RemainHP: 123,
    RemainMP: 123,
    WearItemInfo: [
      {
        PartnerID: "M10002",
        ItemCode: "I123123",
        ItemName: "Helmet",
        ItemLevel: 0,
        ItemGrade: "1",
        ItemDeckCode: "1",
        ItemDeckName: "1",
      },
    ],
    UseSkillInfo: [
      {
        PartnerID: "M10001",
        SkillName: "Magic",
        SkillDamage: 150,
        SkillType: "Fire Ball",
        SkillDuration: 12,
      },
      {
        PartnerID: "M10001",
        SkillName: "Magic",
        SkillDamage: 10,
        SkillType: "ICE Ball",
        SkillDuration: 5,
      },
    ],
    UseItemInfo: [
      {
        PartnerID: "M10001",
        ItemName: "Potion",
        ItemAmount: 1,
        ItemDuration: 10,
      },
      {
        PartnerID: "M10001",
        ItemName: "Mana Potion",
        ItemAmount: 5,
        ItemDuration: 5,
      },
    ],
    EnemyKill: 50,
    EnemyKillInfo: [
      {
        PartnerID: "M1000",
        EnemyID: "M100010",
        EnemyLevel: 100,
        EnemyAttack: 10,
        EnemyDefense: 20,
        EnemyStamina: 40,
      },
      {
        PartnerID: "M1000",
        EnemyID: "M100011",
        EnemyLevel: 100,
        EnemyAttack: 8,
        EnemyDefense: 20,
        EnemyStamina: 40,
      },
    ],
  },
];

storageCoreApi.ContentActInfos(requestContentActInfo);
```

### Sending behavior tracking and ad tracking logs
```typescript
const requestAdPerformInfos: model.AdPerformInfosRequest[] = [
  {
    PromoteContentType: 1 as model.ContentType,
    PromoteAdsActType: 0 as model.AdsActType,
    PromoteContentName: "promotecontentname",
    PromoteContent: "promotecontent",
    PromoteJoinKey: "promotejoinkey",
    PromoteJoinContent: [
      { JoinStep: 1, JoinChoice: 10, JoinLevel: 2 },
      { JoinStep: 2, JoinChoice: 12, JoinLevel: 1 },
    ],
    ReferrerPageName: "referrerPageaName",
  },
];

storageCoreApi.AdPerformInfos(requestAdPerformInfos);
```

### Send item change log - Change log of quantity (acquisition/consumption) of all items
```typescript
const requestItemChangeInfo: model.ItemChangeInfoRequest[] = [
  {
    ItemFlowType: 1 as model.FlowType,
    ItemChangeType: 16 as model.ChangeType,
    ChangeDetail: "remove zombie_KING",
    ContentName: "zombie_KING",
    ContentCode: "Cts0100100",
    ItemsInfo: [
      {
        ItemUniqueCode: "1",
        ItemName: "Commu_Potion",
        ItemGrade: "A",
        ItemLevel: 1,
        ItemAmount: 1,
        ItemImputeType: 1,
        MoneyCode: "M100200",
        MoneyName: "Gold",
        MoneyAmount: 100,
      },
      {
        ItemUniqueCode: "2",
        ItemName: "Commu_Potion2",
        ItemGrade: "A",
        ItemLevel: 1,
        ItemAmount: 1,
        ItemImputeType: 1,
        MoneyCode: "M100200",
        MoneyName: "Gold",
        MoneyAmount: 100,
      },
    ],
    ChangeName: "",
  },
];


storageCoreApi.ItemChangeInfos(requestItemChangeInfo);
```

### Qualitative change log transmission of game resources (game items, equipment, pets, characters, etc.)
```typescript
const requestResourceChangeInfo: model.ResourceChangeInfosRequest[] = [
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

storageCoreApi.ResourceChangeInfos(requestResourceChangeInfo);
```

### Send purchase log through card, cash, gift card, etc.
```typescript
const requestBuyInfo: model.BuyInfosRequest[] = [
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

storageCoreApi.BuyInfos(requestBuyInfo);
```


