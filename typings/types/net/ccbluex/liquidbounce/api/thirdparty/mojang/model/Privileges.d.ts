import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TogglePreference } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/model/TogglePreference.d.ts'
export class Privileges extends Record {
    constructor(onlineChat: TogglePreference, multiplayerServer: TogglePreference, multiplayerRealms: TogglePreference, telemetry: TogglePreference, optionalTelemetry: TogglePreference)
    // private multiplayerRealms: TogglePreference;
    /*not mapped: */ multiplayerRealms(): TogglePreference;
    // private multiplayerServer: TogglePreference;
    /*not mapped: */ multiplayerServer(): TogglePreference;
    // private onlineChat: TogglePreference;
    /*not mapped: */ onlineChat(): TogglePreference;
    // private optionalTelemetry: TogglePreference;
    /*not mapped: */ optionalTelemetry(): TogglePreference;
    // private telemetry: TogglePreference;
    /*not mapped: */ telemetry(): TogglePreference;
    component1(): TogglePreference;
    component2(): TogglePreference;
    component3(): TogglePreference;
    component4(): TogglePreference;
    component5(): TogglePreference;
    copy(onlineChat: TogglePreference, multiplayerServer: TogglePreference, multiplayerRealms: TogglePreference, telemetry: TogglePreference, optionalTelemetry: TogglePreference): Privileges;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}