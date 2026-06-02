import type { UserAttributesResponse$Privileges$Privilege } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$Privileges$Privilege.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse$Privileges extends Record {
    constructor(onlineChat: UserAttributesResponse$Privileges$Privilege, multiplayerServer: UserAttributesResponse$Privileges$Privilege, multiplayerRealms: UserAttributesResponse$Privileges$Privilege, telemetry: UserAttributesResponse$Privileges$Privilege, optionalTelemetry: UserAttributesResponse$Privileges$Privilege)
    readonly multiplayerRealms: UserAttributesResponse$Privileges$Privilege;
    readonly multiplayerServer: UserAttributesResponse$Privileges$Privilege;
    readonly onlineChat: UserAttributesResponse$Privileges$Privilege;
    readonly optionalTelemetry: UserAttributesResponse$Privileges$Privilege;
    readonly telemetry: UserAttributesResponse$Privileges$Privilege;
    equals(arg0: Object | null): boolean;
    getMultiplayerRealms(): boolean;
    getMultiplayerServer(): boolean;
    getOnlineChat(): boolean;
    getOptionalTelemetry(): boolean;
    getTelemetry(): boolean;
    hashCode(): number;
    multiplayerRealms(): UserAttributesResponse$Privileges$Privilege;
    multiplayerServer(): UserAttributesResponse$Privileges$Privilege;
    onlineChat(): UserAttributesResponse$Privileges$Privilege;
    optionalTelemetry(): UserAttributesResponse$Privileges$Privilege;
    telemetry(): UserAttributesResponse$Privileges$Privilege;
    toString(): string;
}