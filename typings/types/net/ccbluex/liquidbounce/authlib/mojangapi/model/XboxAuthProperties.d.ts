import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class XboxAuthProperties extends Record {
    constructor(authMethod: string, siteName: string, rpsTicket: string)
    // private authMethod: string;
    /*not mapped: */ authMethod(): string;
    // private rpsTicket: string;
    /*not mapped: */ rpsTicket(): string;
    // private siteName: string;
    /*not mapped: */ siteName(): string;
    component1(): string;
    component2(): string;
    component3(): string;
    copy(authMethod: string, siteName: string, rpsTicket: string): XboxAuthProperties;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}