import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Represents information about an IP address
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:58}
 */
export class IpInfoApi$IpData extends Object {
    constructor(ip: string | null, hostname: string | null, city: string | null, region: string | null, country: string | null, loc: string | null, org: string | null, postal: string | null, timezone: string | null)
    readonly city: string | null;
    readonly country: string | null;
    readonly hostname: string | null;
    readonly ip: string | null;
    readonly loc: string | null;
    readonly org: string | null;
    readonly postal: string | null;
    readonly region: string | null;
    readonly timezone: string | null;
    component1(): string | null;
    component2(): string | null;
    component3(): string | null;
    component4(): string | null;
    component5(): string | null;
    component6(): string | null;
    component7(): string | null;
    component8(): string | null;
    component9(): string | null;
    copy(ip: string | null, hostname: string | null, city: string | null, region: string | null, country: string | null, loc: string | null, org: string | null, postal: string | null, timezone: string | null): IpInfoApi$IpData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}