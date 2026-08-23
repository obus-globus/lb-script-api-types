import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NameChangeInfo extends Record {
    constructor(changedAt: string, createdAt: string, nameChangeAllowed: boolean)
    // private changedAt: string;
    /*not mapped: */ changedAt(): string;
    // private createdAt: string;
    /*not mapped: */ createdAt(): string;
    // private nameChangeAllowed: boolean;
    /*not mapped: */ nameChangeAllowed(): boolean;
    component1(): string;
    component2(): string;
    component3(): boolean;
    copy(changedAt: string, createdAt: string, nameChangeAllowed: boolean): NameChangeInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}