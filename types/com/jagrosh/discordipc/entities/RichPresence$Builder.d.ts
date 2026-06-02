import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { ActivityType } from '../../../../com/jagrosh/discordipc/entities/ActivityType.d.ts'
import type { PartyPrivacy } from '../../../../com/jagrosh/discordipc/entities/PartyPrivacy.d.ts'
import type { RichPresence } from '../../../../com/jagrosh/discordipc/entities/RichPresence.d.ts'
import type { StatusDisplayType } from '../../../../com/jagrosh/discordipc/entities/StatusDisplayType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RichPresence$Builder extends Object {
    constructor()
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
    build(): RichPresence;
    setActivityType(arg0: ActivityType): RichPresence$Builder;
    setButtons(arg0: JsonElement[]): RichPresence$Builder;
    setDetails(arg0: string): RichPresence$Builder;
    setDetailsUrl(arg0: string): RichPresence$Builder;
    setEndTimestamp(arg0: number): RichPresence$Builder;
    setInstance(arg0: boolean): RichPresence$Builder;
    setJoinSecret(arg0: string): RichPresence$Builder;
    setLargeImage(arg0: string): RichPresence$Builder;
    setLargeImage(arg0: string, arg1: string, arg2: string): RichPresence$Builder;
    setLargeImageWithTooltip(arg0: string, arg1: string): RichPresence$Builder;
    setLargeImageWithUrl(arg0: string, arg1: string): RichPresence$Builder;
    setMatchSecret(arg0: string): RichPresence$Builder;
    setName(arg0: string): RichPresence$Builder;
    setParty(arg0: string, arg1: number, arg2: number, arg3: PartyPrivacy): RichPresence$Builder;
    setSmallImage(arg0: string): RichPresence$Builder;
    setSmallImage(arg0: string, arg1: string, arg2: string): RichPresence$Builder;
    setSmallImageWithTooltip(arg0: string, arg1: string): RichPresence$Builder;
    setSmallImageWithUrl(arg0: string, arg1: string): RichPresence$Builder;
    setSpectateSecret(arg0: string): RichPresence$Builder;
    setStartTimestamp(arg0: number): RichPresence$Builder;
    setState(arg0: string): RichPresence$Builder;
    setStateUrl(arg0: string): RichPresence$Builder;
    setStatusDisplayType(arg0: StatusDisplayType): RichPresence$Builder;
}