import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

/**
 * game login
 */
export const requestGameLoginInfo: model.ConnectInfosRequest[] = [
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

/**
 * game logOut
 */
export const requestGameLogOutInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 0 as model.ConnectType,
    contentName: "StageName",
    entryType: 1 as model.FlowType,
  },
];

/**
 * StageName Contents Entrance
 */
export const requestGameContentsEntranceInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 1 as model.ConnectType,
    contentName: "StageName",
    entryType: 0 as model.FlowType,
  },
];

/**
 * StageName Contents Exit
 */
export const requestGameContentsExitInfo: model.ConnectInfosRequest[] = [
  {
    connectType: 1 as model.ConnectType,
    contentName: "StageName",
    entryType: 1 as model.FlowType,
  },
];
