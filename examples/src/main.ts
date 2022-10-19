import './style.css';
import StorageCoreApi from 'coresight-gamereport-ts-sdk/lib';
import * as model from 'coresight-gamereport-ts-sdk/lib/Models/models';
import * as sample from './sample.data';

const constructorParams: model.ConstructorModel = {
  Url: 'API-URL',
  AuthKey: 'AUTH KEY',
  TargetVer: 'APP VERSION',
  ChannelCode: 'CHANNEL CODE',
  ChannelID: 'CHANNEL ID',
  MemberID: 'MEMBER ID',
  CharID: 'MEMBER CHARACTER ID',
  NickName: 'MEMBER NICKNAME',
  ContryCode: 'KOR',
  OSType: 'ANDROID OR IOS',
  OSVersion: 'OS VERSION',
  DeviceKey: 'DEVICE-KEY',
  DeviceModel: 'IPHONE 14',
  IPAddress: '0.0.0.0',
};
//Create SDK instance
const storageCoreApi = new StorageCoreApi(constructorParams);

//Set Account level - Used when there is a change after the initial object creation
storageCoreApi.SetAccountLevel(50);

//Set character ID - Used when there is a change after the initial object creation
//Set your character ID to "7777777"
storageCoreApi.SetCharacterID('77777777');

//Account ID Settings - Used when there is a change after the initial object creation
//Set memberId to "MID0000007"
storageCoreApi.SetMemberID('MID0000007');

//Set Account Nickname - Used when there is a change after the initial object creation
//Set your account nickname to "IronMan"
storageCoreApi.SetNickName('IronMan');

//Set Channel Id (ID issued by SNS authentication or self-certification)
//Set channel ID to "0000001234567"
storageCoreApi.SetChannelID('0000001234567');

//Set Channel Code (Platform codes such as Google, Apple, etc.)
//Set the channel code to "GOOGLE".
storageCoreApi.SetChannelCode('MarketPlace');

/****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 *
 * caution!
 *
 * The functions implemented below are for reference only,
 * The requestBodySample item defined in the function must be set according to the situation.
 *
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 * ****************************************************************************************
 ****************************************************************************************/

// Acquisition of game money - Acquire and transfer cash equivalents as mission rewards
storageCoreApi.VMoneyChangeInfos(sample.requestVMoneyChangeInfos);

//Game installation success transfer
storageCoreApi.InstallInfos(sample.requestGameInstallSuccessInfo);

//Send successful account creation after installing the game
storageCoreApi.InstallInfos(sample.requestAccountCreateSuccessInfo);

//Send game login log
storageCoreApi.ConnectInfos(sample.requestGameLoginInfo);

//Send game logout log
storageCoreApi.ConnectInfos(sample.requestGameLogOutInfo);

// Content (various game content-stage, PVP, dungeon, etc.) entry log transmission
storageCoreApi.ConnectInfos(sample.requestGameContentsEntranceInfo);

// Contents (various game contents-stage, PVP, dungeon, etc.) Send exit log
storageCoreApi.ConnectInfos(sample.requestGameContentsExitInfo);

//Send content result log
storageCoreApi.ContentActInfos(sample.requestContentActInfo);

//Sending behavior tracking and ad tracking logs
storageCoreApi.AdPerformInfos(sample.requestAdPerformInfos);

//Send item change log - Change log of quantity (acquisition/consumption) of all items
storageCoreApi.ItemChangeInfos(sample.requestItemChangeInfo);

//Qualitative change log transmission of game resources (game items, equipment, pets, characters, etc.)
storageCoreApi.ResourceChangeInfos(sample.requestResourceChangeInfo);

//Send purchase log through card, cash, gift card, etc.
storageCoreApi.BuyInfos(sample.requestBuyInfo);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    SDK
  </div>
`;
