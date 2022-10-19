import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

/**
 * Send item change log - Change log of quantity (acquisition/consumption) of all items
 */
export const requestItemChangeInfo: model.ItemChangeInfoRequest[] = [
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
