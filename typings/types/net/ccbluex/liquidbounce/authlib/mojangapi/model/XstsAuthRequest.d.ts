import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XstsAuthProperties } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XstsAuthProperties.d.ts'
export class XstsAuthRequest extends Record {
    constructor(properties: XstsAuthProperties, relyingParty: string, tokenType: string)
    // private properties: XstsAuthProperties;
    /*not mapped: */ properties(): XstsAuthProperties;
    // private relyingParty: string;
    /*not mapped: */ relyingParty(): string;
    // private tokenType: string;
    /*not mapped: */ tokenType(): string;
    component1(): XstsAuthProperties;
    component2(): string;
    component3(): string;
    copy(properties: XstsAuthProperties, relyingParty: string, tokenType: string): XstsAuthRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}