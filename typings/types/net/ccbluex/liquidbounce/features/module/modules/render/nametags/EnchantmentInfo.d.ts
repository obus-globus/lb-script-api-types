import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class EnchantmentInfo extends Record {
    constructor(displayName: string, isCurse: boolean, level: number)
    // private displayName: string;
    /*not mapped: */ displayName(): string;
    // private isCurse: boolean;
    /*not mapped: */ isCurse(): boolean;
    // private level: number;
    /*not mapped: */ level(): number;
    component1(): string;
    component2(): boolean;
    component3(): number;
    copy(displayName: string, isCurse: boolean, level: number): EnchantmentInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}