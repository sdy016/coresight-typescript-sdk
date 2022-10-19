import * as model from './Models/models';
import { guid } from './Utils/uuid';
import { RequestHTTP, getAuthKey } from './Utils/requestHTTP';
import {
  AdPerformInfos_URL,
  ConnectInfos_URL,
  ContentActInfos_URL,
  InstallInfos_URL,
  ItemChangeInfos_URL,
  ResourceChangeInfos_URL,
  VMoneyChangeInfos_URL,
  BuyInfos_URL,
} from './enviorment';
import { getRequestData, getRequestDataByAddParam } from './Utils/getRequestData';
import { getDeviceName } from './Utils/getDeviceName';

class StorageCoreApi implements model.IStorageCoreApi {
  urlPrefix: string = '';
  connectKey: string = '';
  authSeq: string = '';
  isDebug: boolean = false;
  baseInfo: model.BaseInfo;
  DeviceModel: string = '';

  /**
   *
   * @param constructorModel
   */
  constructor(constructorModel: model.ConstructorModel) {
    const {
      Url,
      AuthKey,
      TargetVer,
      ChannelCode,
      ChannelID,
      MemberID,
      CharID,
      NickName,
      ContryCode,
      OSType,
      OSVersion,
      DeviceKey,
      DeviceModel,
      IPAddress,
    } = constructorModel;

    this.urlPrefix = Url;
    this.baseInfo = new model.BaseInfo(
      '1.0.14',
      '1.0.1',
      TargetVer,
      '',
      ChannelCode,
      ChannelID,
      ContryCode,
      OSType,
      OSVersion,
      DeviceKey,
      MemberID,
      CharID,
      NickName,
      0,
      getAuthKey(AuthKey),
      IPAddress,
      guid()
    );
    this.DeviceModel = DeviceModel;
  }

  public SetDebug(debug: boolean): void {
    this.isDebug = debug;
  }

  public IsDebug(): boolean {
    return this.isDebug;
  }

  public SetAccountLevel(AccountLevel: number): void {
    this.baseInfo.AccountLevel = AccountLevel;
  }

  public SetCharacterID(CharacterID: string): void {
    this.baseInfo.CharID = CharacterID;
  }

  public SetMemberID(MemberID: string): void {
    this.baseInfo.MemberID = MemberID;
  }

  public SetNickName(NickName: string): void {
    this.baseInfo.NickName = NickName;
  }

  SetChannelID(ChannelID: string): void {
    this.baseInfo.ChannelID = ChannelID;
  }

  SetChannelCode(ChannelCode: string): void {
    this.baseInfo.ChannelCode = ChannelCode;
  }

  ConnectInfos(connectInfosRequest: Array<model.ConnectInfosRequest>): void {
    try {
      if (connectInfosRequest.length > 0) {
        const { entryType, connectType } = connectInfosRequest[0];
        const uuid = guid();
        if (entryType == model.FlowType.IN && connectType == model.ConnectType.APP) {
          this.connectKey = uuid;
          this.authSeq = uuid;
          this.baseInfo.AuthSEQ = this.authSeq;
        } else {
          this.connectKey = uuid;
        }

        const requestData: string = getRequestDataByAddParam(
          this.baseInfo,
          connectInfosRequest,
          'ConnectKey',
          this.connectKey
        );
        RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, ConnectInfos_URL, requestData);
      }
    } catch (error) {
      console.error(error);
    }
  }
  ContentActInfos(contentActInfosRequest: Array<model.ContentActInfosRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, contentActInfosRequest);
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, ContentActInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }
  AdPerformInfos(adPerformInfosRequest: Array<model.AdPerformInfosRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, adPerformInfosRequest);
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, AdPerformInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }
  InstallInfos(installInfosRequest: Array<model.InstallInfosRequest>): void {
    try {
      const requestData: string = getRequestDataByAddParam(
        this.baseInfo,
        installInfosRequest,
        'DeviceName',
        getDeviceName()
      );
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, InstallInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }
  ItemChangeInfos(itemChangeInfosRequest: Array<model.ItemChangeInfoRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, itemChangeInfosRequest);
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, ItemChangeInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }

  VMoneyChangeInfos(vMoneyChangeInfosRequest: Array<model.VMoneyChangeInfosRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, vMoneyChangeInfosRequest);

      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, VMoneyChangeInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }

  ResourceChangeInfos(resourceChangeInfosRequest: Array<model.ResourceChangeInfosRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, resourceChangeInfosRequest);
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, ResourceChangeInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }

  BuyInfos(buyInfosRequest: Array<model.BuyInfosRequest>): void {
    try {
      const requestData: string = getRequestData(this.baseInfo, buyInfosRequest);
      RequestHTTP(this.baseInfo.AuthKey, this.urlPrefix, BuyInfos_URL, requestData);
    } catch (error) {
      console.error(error);
    }
  }
}

export default StorageCoreApi;
