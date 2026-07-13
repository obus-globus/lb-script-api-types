import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class XboxUserInfo extends Record {
    constructor(uhs: string)
    // private uhs: string;
    /*not mapped: */ uhs(): string;
    component1(): string;
    copy(uhs: string): XboxUserInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}