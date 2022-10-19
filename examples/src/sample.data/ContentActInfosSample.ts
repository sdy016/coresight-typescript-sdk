import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

/**
 * Send content result log
 */
export const requestContentActInfo: model.ContentActInfosRequest[] = [
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
