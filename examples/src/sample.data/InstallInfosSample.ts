import * as model from "coresight-gamereport-ts-sdk/lib/Models/models";

/**
 * successful game installation
 */
export const requestGameInstallSuccessInfo: model.InstallInfosRequest[] = [
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

/**
 * Called after game installation and account creation is complete
 */
export const requestAccountCreateSuccessInfo: model.InstallInfosRequest[] = [
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
