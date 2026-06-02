import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { ActivityType } from '../../../../com/jagrosh/discordipc/entities/ActivityType.d.ts'
import type { PartyPrivacy } from '../../../../com/jagrosh/discordipc/entities/PartyPrivacy.d.ts'
import type { StatusDisplayType } from '../../../../com/jagrosh/discordipc/entities/StatusDisplayType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RichPresence extends Object {
    constructor(arg0: ActivityType, arg1: StatusDisplayType, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: number, arg8: number, arg9: string, arg10: string, arg11: string, arg12: string, arg13: string, arg14: string, arg15: string, arg16: number, arg17: number, arg18: PartyPrivacy, arg19: string, arg20: string, arg21: string, arg22: JsonElement[], arg23: boolean)
    // private activityType: ActivityType;
    // private buttons: JsonElement[];
    // private details: string;
    // private detailsUrl: string;
    // private endTimestamp: number;
    // private instance: boolean;
    // private joinSecret: string;
    // private largeImageKey: string;
    // private largeImageText: string;
    // private largeImageUrl: string;
    // private matchSecret: string;
    // private name: string;
    // private partyId: string;
    // private partyMax: number;
    // private partyPrivacy: PartyPrivacy;
    // private partySize: number;
    // private smallImageKey: string;
    // private smallImageText: string;
    // private smallImageUrl: string;
    // private spectateSecret: string;
    // private startTimestamp: number;
    // private state: string;
    // private stateUrl: string;
    // private statusDisplayType: StatusDisplayType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toDecodedJson(arg0: string): string;
    toJson(): JsonObject;
}