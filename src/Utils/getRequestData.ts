import { BaseInfo } from '../Models/models';
import { getConvertDateToString } from './dateFormat';

export function getRequestDataByAddParam(
  baseInfo: BaseInfo,
  requestData: any,
  addParamProperty: string,
  addParamValue: string
): string {
  let result: Array<any> = [];

  if (requestData) {
    if (requestData.length > 0) {
      requestData.forEach((_item: any) => {
        const data = {
          EventDateTime: getConvertDateToString(),
          SDKVer: baseInfo.SDKVer,
          APIVer: baseInfo.APIVer,
          TargetVer: baseInfo.TargetVer,
          Vcode: baseInfo.Vcode,
          ChannelCode: baseInfo.ChannelCode,
          ChannelID: baseInfo.ChannelID,
          CountryCode: baseInfo.CountryCode,
          OSCode: baseInfo.OSCode,
          OSCodeVer: baseInfo.OSCodeVer,
          DeviceKey: baseInfo.DeviceKey,
          MemberID: baseInfo.MemberID,
          CharID: baseInfo.CharID,
          NickName: baseInfo.NickName,
          AccountLevel: baseInfo.AccountLevel,
          AuthKey: baseInfo.AuthKey,
          AuthIP: baseInfo.AuthIP,
          AuthSEQ: baseInfo.GetAuthSEQ(),
          ..._item,
          [addParamProperty]: addParamValue,
        };
        result.push(data);
        //return getRequestDataObject(_baseInfo, _item);
      });
    }
  }

  return JSON.stringify(result);
}

export function getRequestData(baseInfo: BaseInfo, requestData: any): string {
  let result: Array<any> = [];

  if (requestData) {
    if (requestData.length > 0) {
      requestData.forEach((_item: any) => {
        const data = {
          EventDateTime: getConvertDateToString(),
          SDKVer: baseInfo.SDKVer,
          APIVer: baseInfo.APIVer,
          TargetVer: baseInfo.TargetVer,
          Vcode: baseInfo.Vcode,
          ChannelCode: baseInfo.ChannelCode,
          ChannelID: baseInfo.ChannelID,
          CountryCode: baseInfo.CountryCode,
          OSCode: baseInfo.OSCode,
          OSCodeVer: baseInfo.OSCodeVer,
          DeviceKey: baseInfo.DeviceKey,
          MemberID: baseInfo.MemberID,
          CharID: baseInfo.CharID,
          NickName: baseInfo.NickName,
          AccountLevel: baseInfo.AccountLevel,
          AuthKey: baseInfo.AuthKey,
          AuthIP: baseInfo.AuthIP,
          AuthSEQ: baseInfo.GetAuthSEQ(),
          ..._item,
        };
        result.push(data);
        //return getRequestDataObject(_baseInfo, _item);
      });
    }
  }

  return JSON.stringify(result);
}

export function getRequestDataObject(baseInfo: BaseInfo, requestData: any): any {
  const data = {
    EventDateTime: getConvertDateToString(),
    SDKVer: baseInfo.SDKVer,
    APIVer: baseInfo.APIVer,
    TargetVer: baseInfo.TargetVer,
    Vcode: baseInfo.Vcode,
    ChannelCode: baseInfo.ChannelCode,
    ChannelID: baseInfo.ChannelID,
    CountryCode: baseInfo.CountryCode,
    OSCode: baseInfo.OSCode,
    OSCodeVer: baseInfo.OSCodeVer,
    DeviceKey: baseInfo.DeviceKey,
    MemberID: baseInfo.MemberID,
    CharID: baseInfo.CharID,
    NickName: baseInfo.NickName,
    AccountLevel: baseInfo.AccountLevel,
    AuthKey: baseInfo.AuthKey,
    AuthIP: baseInfo.AuthIP,
    AuthSEQ: baseInfo.GetAuthSEQ(),
    ...requestData,
  };
  return data;
}
