import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XboxUserInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxUserInfo.d.ts'
export class XboxDisplayClaims extends Record {
    constructor(xui: XboxUserInfo[])
    // private xui: XboxUserInfo[];
    /*not mapped: */ xui(): XboxUserInfo[];
    component1(): XboxUserInfo[];
    copy(xui: XboxUserInfo[]): XboxDisplayClaims;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}