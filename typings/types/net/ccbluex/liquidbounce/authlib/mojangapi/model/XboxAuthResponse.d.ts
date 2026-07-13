import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XboxDisplayClaims } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxDisplayClaims.d.ts'
export class XboxAuthResponse extends Record {
    constructor(token: string, displayClaims: XboxDisplayClaims, issueInstant: string, notAfter: string)
    // private displayClaims: XboxDisplayClaims;
    /*not mapped: */ displayClaims(): XboxDisplayClaims;
    // private issueInstant: string;
    /*not mapped: */ issueInstant(): string;
    // private notAfter: string;
    /*not mapped: */ notAfter(): string;
    // private token: string;
    /*not mapped: */ token(): string;
    component1(): string;
    component2(): XboxDisplayClaims;
    component3(): string;
    component4(): string;
    copy(token: string, displayClaims: XboxDisplayClaims, issueInstant: string, notAfter: string): XboxAuthResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}