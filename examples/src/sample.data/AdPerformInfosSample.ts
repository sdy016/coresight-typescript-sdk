import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

export const requestAdPerformInfos: model.AdPerformInfosRequest[] = [
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

export const requestAdPerformInfosFunnel: model.AdPerformInfosRequest[] = [
  {
    //Enter PromoteContentType = '3' for behavior tracking
    //Enter '3' for behavior tracking
    PromoteContentType: 3 as model.ContentType,
    //Enter PromoteAdsActType = '3' for behavior tracking
    //Enter '3' for behavior tracking
    PromoteAdsActType: 3 as model.AdsActType,
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
