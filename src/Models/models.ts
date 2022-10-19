import { guid } from '../Utils/uuid';

export class BaseInfo {
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthKey: string;
  AuthIP: string;
  AuthSEQ: string;

  constructor(
    SDKVer: string,
    APIVer: string,
    TargetVer: string,
    Vcode: string,
    ChannelCode: string,
    ChannelID: string,
    CountryCode: string,
    OSCode: string,
    OSCodeVer: string,
    DeviceKey: string,
    MemberID: string,
    CharID: string,
    NickName: string,
    AccountLevel: number,
    AuthKey: string,
    AuthIP: string,
    AuthSEQ: string
  ) {
    this.SDKVer = SDKVer;
    this.APIVer = APIVer;
    this.TargetVer = TargetVer;
    this.Vcode = Vcode;
    this.ChannelCode = ChannelCode;
    this.ChannelID = ChannelID;
    this.CountryCode = CountryCode;
    this.OSCode = OSCode;
    this.OSCodeVer = OSCodeVer;
    this.DeviceKey = DeviceKey;
    this.MemberID = MemberID;
    this.CharID = CharID;
    this.NickName = NickName;
    this.AccountLevel = AccountLevel;
    this.AuthKey = AuthKey;
    this.AuthIP = AuthIP;
    this.AuthSEQ = AuthSEQ;
  }
  public GetAuthSEQ(): string {
    if (this.AuthSEQ === '') {
      this.AuthSEQ = guid();
    }
    return this.AuthSEQ;
  }
}

export enum AdsActType {
  IMPRESSION,
  CLICK,
  ENTRY,
  COMPLATE,
  FAIL,
  SUCCESS,
}
export enum AutoType {
  AUTO,
  MANUAL,
}
export enum ChangeActType {
  GRADE,
  LEVEL,
  COMPOSE,
  TRANSCENDENCE,
  ENHANCING,
  DISASSEMBLE,
  OPTION,
  NUMBERS,
  SKILL,
  ETC,
  INSTALL,
  UNINSTALL,
}
export enum ChangeType {
  CASH,
  VRCASH,
  COUPON,
  EVENTREWARD,
  QUESTREWARD,
  MISSIONREWARD,
  NORMALREWARD,
  POST,
  GUILDSUPPORT,
  GACHA,
  BUY,
  COLLECT,
  SNSSUPPORT,
  ENCHABT,
  DISMANTLE,
  MAKE,
  STAGEACTION,
  PVPACTION,
  PVEACTION,
  PVMPACTION,
  GUILDACTION,
  EVENTSTAGEACTION,
  UPGRADE,
  DELETE,
  ITEMDROP,
  DEAL,
  INIT,
  ETC,
}
export enum ConMethodType {
  DATA,
  WIFI,
}
export enum ConnectType {
  APP,
  CONTENT,
}
export enum ContentType {
  AD,
  EVENT,
  NOTICE,
  TRACK,
}
export enum CurrencyType {
  KRW,
  CNY,
  HKD,
  TWD,
  EUR,
  USD,
  GBP,
  AUD,
  JPY,
  RUB,
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BHD,
  BIF,
  BMD,
  BND,
  BOB,
  BRL,
  BSD,
  BTC,
  BTN,
  BWP,
  BYN,
  BYR,
  BZD,
  CAD,
  CDF,
  CHF,
  CLF,
  CLP,
  CNH,
  COP,
  CRC,
  CUC,
  CUP,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EEK,
  EGP,
  ERN,
  ETB,
  FJD,
  FKP,
  GEL,
  GGP,
  GHS,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HNL,
  HRK,
  HTG,
  HUF,
  IDR,
  ILS,
  IMP,
  INR,
  IQD,
  IRR,
  ISK,
  JEP,
  JMD,
  JOD,
  KES,
  KGS,
  KHR,
  KMF,
  KPW,
  KWD,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  LYD,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRO,
  MRU,
  MTL,
  MUR,
  MVR,
  MWK,
  MXN,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  OMR,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  RWF,
  SAR,
  SBD,
  SCR,
  SDG,
  SEK,
  SGD,
  SHP,
  SLL,
  SOS,
  SRD,
  SSP,
  STD,
  STN,
  SVC,
  SYP,
  SZL,
  THB,
  TJS,
  TMT,
  TND,
  TOP,
  TRY,
  TTD,
  TZS,
  UAH,
  UGX,
  UYU,
  UZS,
  VEF,
  VND,
  VUV,
  WST,
  XAF,
  XAG,
  XAU,
  XCD,
  XDR,
  XOF,
  XPD,
  XPF,
  XPT,
  YER,
  ZAR,
  ZMK,
  ZMW,
}
export enum FlowType {
  IN,
  OUT,
}
export enum ImpCondition {
  LOGINAFTER,
  LOBBY,
  MISSIONSUCCESS,
  MISSIONFAIL,
  STAGEFAIL,
}
export enum InstallType {
  INSTALL,
  ACCOUNT,
}
export enum MoneyChangeType {
  CASH,
  VRCASH,
  COUPON,
  EVENTREWARD,
  QUESTREWARD,
  MISSIONREWARD,
  NORMALREWARD,
  POST,
  GUILDSUPPORT,
  GUILDCREATE,
  GACHA,
  BUY,
  COLLECT,
  SNSSUPPORT,
  ENCHABT,
  CHARNCHABT,
  DISMANTLE,
  MAKE,
  STAGEACTION,
  PVPACTION,
  PVEACTION,
  PVMPACTION,
  GUILDACTION,
  EVENTSTAGEACTION,
  UPGRADE,
  DELETE,
  ITEMDROP,
  DEAL,
  REPAIR,
  EXTEND,
  MOVEMENT,
  USERSUPPORT,
  INIT,
  ETC,
}
export enum MoneyType {
  GOLD,
  CASH,
  STAMINA,
  MILEAGE,
  EXP,
}
export enum ObjectType {
  ACCOUNT,
  CHAR,
  CARD,
  ITEM,
  PET,
}
export enum PartnerType {
  MYSELF,
  MAINMYSELF,
  FRIEND,
  GUILD,
  PET,
  RANDOM,
  ETC,
}
export enum PurchaseType {
  CHARGE,
  BONUS,
  CASHPRESENT,
  PURCHARSE,
  ITEMPRESENT,
}
export enum RequestType {
  ASK,
  AGREE,
  DROP,
  REJECT,
}
export enum ResultType {
  TRY,
  SUCCESS,
  FAIL,
  NON,
}
export enum ServiceType {
  GOOGLE,
  APPLE,
  NAVER,
  SK,
  ETC,
}
export enum StageType {
  STAGE,
  EVENTSTAGE,
  GUILD,
  FRIENDSHIP,
  MISSION,
  PVE,
  PVP,
  PVMP,
  QUEST,
  SIEGE,
}
export enum StateType {
  TRY,
  FINISH,
}
export enum ToolCodeType {
  CARD,
  MOBILE,
  SENDCASH,
  CASH,
  GIFTCARD,
}

export interface ConstructorModel {
  Url: string;
  AuthKey: string;
  TargetVer: string;
  ChannelCode: string;
  ChannelID: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  ContryCode: string;
  OSType: string;
  OSVersion: string;
  DeviceKey: string;
  DeviceModel: string;
  IPAddress: string;
}

export interface CenterInfo {
  EventDateTime: string;
  Ver: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  MemberID: string;
  NickName: string;
  AccountLevel: string;
  AuthIP: string;
  AuthSEQ: string;
}

export interface EnemyInfo {
  PartnerID: string;
  EnemyID: string;
  EnemyLevel: number;
  EnemyAttack: number;
  EnemyDefense: number;
  EnemyStamina: number;
}

export interface ItemInfo {
  PartnerID: string;
  ItemName: string;
  ItemAmount: number;
  ItemDuration: number;
}

export interface ItemsInfo {
  ItemUniqueCode: string;
  ItemName: string;
  ItemGrade: string;
  ItemLevel: number;
  ItemAmount: number;
  ItemImputeType: number;
  MoneyCode: string;
  MoneyName: string;
  MoneyAmount: number;
}

export interface JoinContent {
  JoinStep: number;
  JoinChoice: number;
  JoinLevel: number;
}

export interface PartnersInfo {
  PartnerType: PartnerType;
  MemberID: string;
  PartnerID: string;
  PartnerLevel: number;
  PartnerCharUQCode: string;
  PartnerHP: number;
  PartnerMP: number;
}

export interface SkillInfo {
  PartnerID: string;
  SkillName: string;
  SkillDamage: number;
  SkillType: string;
  SkillDuration: number;
}

export interface WearItemInfo {
  PartnerID: string;
  ItemCode: string;
  ItemName: string;
  ItemLevel: number;
  ItemGrade: string;
  ItemDeckCode: string;
  ItemDeckName: string;
}

export interface AdPerformInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  PromoteContentType: ContentType;
  PromoteAdsActType: AdsActType;
  PromoteContentName: string;
  PromoteContent: string;
  PromoteJoinKey: string;
  PromoteJoinContent: Array<JoinContent>;
  ReferrerPageName: string;
}

export interface ContentActInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  StageType: StageType;
  StageName: string;
  IsAuto: AutoType;
  StageGrade: string;
  StageResultGrade: string;
  StagePlayTime: number;
  StageResult: ResultType;
  StagePartnersInfo: Array<PartnersInfo>;
  RemainHP: number;
  RemainMP: number;
  WearItemInfo: Array<WearItemInfo>;
  UseSkillInfo: Array<SkillInfo>;
  UseItemInfo: Array<ItemInfo>;
  EnemyKill: number;
  EnemyKillInfo: Array<EnemyInfo>;
}

export interface ItemChangeInfoRequest {
  ItemFlowType: FlowType;
  ItemChangeType: ChangeType;
  ChangeDetail: string | null;
  ContentName: string | null;
  ContentCode: string | null;
  ItemsInfo: Array<ItemsInfo> | null;
  ChangeName: string | null;
}

export interface BuyInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  OrderNO: string;
  GoodsCode: string;
  PayPurchaseType: PurchaseType;
  ItemCode: string;
  ItemName: string;
  Amount: number;
  CurrencyCode: CurrencyType;
  TotalPrice: number;
  PayToolCode: ToolCodeType;
  Sdate: string;
  Edate: string;
  ReceiveMemberID: string;
  Balance: number;
  PayResultType: ResultType;
  PayResultMessage: string;
}

export interface ConnectInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  ConnectType: ConnectType;
  ContentName: string;
  EntryType: FlowType;
  ConnectKey: string;
}

export interface InstallInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  AppInstallType: InstallType;
  ReferrerURL: string;
  APPVersion: string;
  DeviceName: string;
  DeviceCPU: string;
  DeviceRAM: string;
  DeviceGPU: string;
  DeviceOSVersion: string;
  DeviceInstallStateType: StateType;
  DeviceInstallResult: ResultType;
  InstallErrorMessage: string;
  PushToken: string;
}

export interface ResourceChangeInfo {
  EventDateTime: string;
  AuthKey: string;
  SDKVer: string;
  APIVer: string;
  TargetVer: string;
  Vcode: string;
  ChannelCode: string;
  ChannelID: string;
  CountryCode: string;
  OSCode: string;
  OSCodeVer: string;
  DeviceKey: string;
  MemberID: string;
  CharID: string;
  NickName: string;
  AccountLevel: number;
  AuthIP: string;
  AuthSEQ: string;
  ChangeObjectType: ObjectType;
  UniqueCode: string;
  SeqCode: number;
  Name: string;
  TargetUniqueCode: string;
  TargetSeqCode: string;
  TargetName: string;
  ResourceChangeStateType: ChangeActType;
  BeforeLevel: string;
  AfterLevel: string;
  BeforeLevelDesc: string;
  AfterLevelDesc: string;
  ChangeResultType: ResultType;
  MoneyCode: string;
  MoneyName: string;
  MoneyAmount: number;
}

export interface ConnectInfosRequest {
  connectType: ConnectType;
  contentName: string | null;
  entryType: FlowType;
}
export interface ContentActInfosRequest {
  StageType: StageType;
  StageName: string | null;
  IsAuto: AutoType;
  StageGrade: string | null;
  StageResultGrade: string | null;
  StagePlayTime: number;
  StageResult: ResultType;
  StagePartnersInfo: Array<PartnersInfo> | null;
  RemainHP: number;
  RemainMP: number;
  WearItemInfo: Array<WearItemInfo> | null;
  UseSkillInfo: Array<SkillInfo> | null;
  UseItemInfo: Array<ItemInfo> | null;
  EnemyKill: number;
  EnemyKillInfo: Array<EnemyInfo> | null;
}

export interface AdPerformInfosRequest {
  PromoteContentType: ContentType;
  PromoteAdsActType: AdsActType;
  PromoteContentName: string | null;
  PromoteContent: string | null;
  PromoteJoinKey: string | null;
  PromoteJoinContent: Array<JoinContent> | null;
  ReferrerPageName: string | null;
}
export interface InstallInfosRequest {
  AppInstallType: InstallType;
  ReferrerURL: string | null;
  APPVersion: string | null;
  DeviceInstallStateType: StateType;
  DeviceInstallResult: ResultType;
  InstallErrorMessage: string | null;
  PushToken: string | null;
}

/**
 * VMoneyChangeInfos Parameter
 */
export interface VMoneyChangeInfosRequest {
  MoneyFlowType: FlowType;
  MoneyName: string | null;
  MoneyChangeType: MoneyChangeType;
  MoneyChangeDetail: string | null;
  ContentName: string | null;
  ContentCode: string | null;
  MoneyType: MoneyType;
  Amount: number;
  HoldAmount: number;
  MoneyChangeName: string | null;
}
export interface ResourceChangeInfosRequest {
  ChangeObjectType: ObjectType;
  UniqueCode: string | null;
  SeqCode: number;
  Name: string | null;
  TargetUniqueCode: string | null;
  TargetSeqCode: string | null;
  TargetName: string | null;
  ResourceChangeStateType: ChangeActType;
  BeforeLevel: string | null;
  AfterLevel: string | null;
  BeforeLevelDesc: string | null;
  AfterLevelDesc: string | null;
  ChangeResultType: ResultType;
  MoneyCode: string | null;
  MoneyName: string | null;
  MoneyAmount: number;
}
export interface BuyInfosRequest {
  OrderNO: string | null;
  GoodsCode: string | null;
  PayPurchaseType: PurchaseType;
  ItemCode: string | null;
  ItemName: string | null;
  Amount: number;
  CurrencyCode: CurrencyType;
  TotalPrice: number;
  PayToolCode: ToolCodeType;
  Sdate: String;
  Edate: String;
  ReceiveMemberID: string | null;
  Balance: number;
  PayResultType: ResultType;
  PayResultMessage: string | null;
}

export interface IStorageCoreApi {
  ConnectInfos(connectInfosRequest: Array<ConnectInfosRequest>): void;
  ContentActInfos(contentActInfosRequest: Array<ContentActInfosRequest>): void;
  AdPerformInfos(adPerformInfosRequest: Array<AdPerformInfosRequest>): void;
  InstallInfos(installInfosRequest: Array<InstallInfosRequest>): void;
  ItemChangeInfos(itemChangeInfosRequest: Array<ItemChangeInfoRequest>): void;
  VMoneyChangeInfos(vMoneyChangeInfosRequest: Array<VMoneyChangeInfosRequest>): void;
  ResourceChangeInfos(ResourceChangeInfosRequest: Array<ResourceChangeInfosRequest>): void;
  BuyInfos(buyInfosRequest: Array<BuyInfosRequest>): void;
}
