import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class RealmsServer extends Object {
    static fromApiJson(paramarg0: Map$Entry<string, GsonElement>[]): RealmsServer;
    constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean, arg7: number, arg8: string, arg9: number, arg10: boolean, arg11: string, arg12: JsonObject)
    readonly activeVersion: string;
    readonly compatible: boolean;
    readonly daysLeft: number;
    readonly expired: boolean;
    readonly id: number;
    readonly maxPlayers: number;
    readonly motd: string;
    readonly name: string;
    readonly ownerName: string;
    readonly ownerUid: string;
    readonly rawResponse: JsonObject;
    readonly state: string;
    readonly worldType: string;
    equals(arg0: Object | null): boolean;
    getActiveVersion(): string;
    getActiveVersionOr(arg0: string): string;
    getDaysLeft(): number;
    getId(): number;
    getMaxPlayers(): number;
    getMotd(): string;
    getMotdOr(arg0: string): string;
    getName(): string;
    getNameOr(arg0: string): string;
    getOwnerName(): string;
    getOwnerNameOr(arg0: string): string;
    getOwnerUid(): string;
    getOwnerUidOr(arg0: string): string;
    getRawResponse(): JsonObject;
    getState(): string;
    getWorldType(): string;
    hashCode(): number;
    isCompatible(): boolean;
    isExpired(): boolean;
    toString(): string;
}