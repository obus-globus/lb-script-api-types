import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Ban$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/Ban$Companion.d.ts'
/**
 * @param bannedUntil epoch milliseconds the ban expires at, or `-1` if it never does.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/account/Ban.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/Ban.kt:29}
 */
export class Ban extends Object {
    static Companion: Ban$Companion;
    constructor(serverName: string, reason: string, bannedUntil: number)
    readonly bannedUntil: number;
    /*not mapped: */ isPermanent(): boolean;
    readonly reason: string;
    readonly serverName: string;
    component1(): string;
    component2(): string;
    component3(): number;
    copy(serverName: string, reason: string, bannedUntil: number): Ban;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toJson(): JsonObject;
    toString(): string;
}