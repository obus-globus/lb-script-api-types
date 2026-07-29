import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordActivity$Button } from '../../../net/ccbluex/discordipc/DiscordActivity$Button.d.ts'
import type { DiscordActivity$Image } from '../../../net/ccbluex/discordipc/DiscordActivity$Image.d.ts'
import type { DiscordActivity$StatusDisplayType } from '../../../net/ccbluex/discordipc/DiscordActivity$StatusDisplayType.d.ts'
import type { DiscordActivity$Type } from '../../../net/ccbluex/discordipc/DiscordActivity$Type.d.ts'
export class DiscordActivity extends Record {
    static MAX_BUTTONS: number;
    constructor(type: DiscordActivity$Type, statusDisplayType: DiscordActivity$StatusDisplayType, state: string | null, details: string | null, startTimestamp: Instant | null, largeImage: DiscordActivity$Image | null, smallImage: DiscordActivity$Image | null, buttons: DiscordActivity$Button[])
    // private buttons: DiscordActivity$Button[];
    /*not mapped: */ buttons(): DiscordActivity$Button[];
    // private details: string | null;
    /*not mapped: */ details(): string | null;
    // private largeImage: DiscordActivity$Image | null;
    /*not mapped: */ largeImage(): DiscordActivity$Image | null;
    // private smallImage: DiscordActivity$Image | null;
    /*not mapped: */ smallImage(): DiscordActivity$Image | null;
    // private startTimestamp: Instant | null;
    /*not mapped: */ startTimestamp(): Instant | null;
    // private state: string | null;
    /*not mapped: */ state(): string | null;
    // private statusDisplayType: DiscordActivity$StatusDisplayType;
    /*not mapped: */ statusDisplayType(): DiscordActivity$StatusDisplayType;
    // private type: DiscordActivity$Type;
    /*not mapped: */ type(): DiscordActivity$Type;
    component1(): DiscordActivity$Type;
    component2(): DiscordActivity$StatusDisplayType;
    component3(): string | null;
    component4(): string | null;
    component5(): Instant | null;
    component6(): DiscordActivity$Image | null;
    component7(): DiscordActivity$Image | null;
    component8(): DiscordActivity$Button[];
    copy(type: DiscordActivity$Type, statusDisplayType: DiscordActivity$StatusDisplayType, state: string | null, details: string | null, startTimestamp: Instant | null, largeImage: DiscordActivity$Image | null, smallImage: DiscordActivity$Image | null, buttons: DiscordActivity$Button[]): DiscordActivity;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toJson(): JsonObject;
    toString(): string;
}