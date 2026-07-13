import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XboxAuthProperties } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthProperties.d.ts'
export class XboxAuthRequest extends Record {
    constructor(properties: XboxAuthProperties, relyingParty: string, tokenType: string)
    // private properties: XboxAuthProperties;
    /*not mapped: */ properties(): XboxAuthProperties;
    // private relyingParty: string;
    /*not mapped: */ relyingParty(): string;
    // private tokenType: string;
    /*not mapped: */ tokenType(): string;
    component1(): XboxAuthProperties;
    component2(): string;
    component3(): string;
    copy(properties: XboxAuthProperties, relyingParty: string, tokenType: string): XboxAuthRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}