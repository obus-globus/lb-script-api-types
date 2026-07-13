import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ProfileIdName extends Record {
    constructor(id: string, name: string, legacy: boolean | null, demo: boolean | null)
    // private demo: boolean | null;
    /*not mapped: */ demo(): boolean | null;
    // private id: string;
    /*not mapped: */ id(): string;
    // private legacy: boolean | null;
    /*not mapped: */ legacy(): boolean | null;
    // private name: string;
    /*not mapped: */ name(): string;
    component1(): string;
    component2(): string;
    component3(): boolean | null;
    component4(): boolean | null;
    copy(id: string, name: string, legacy: boolean | null, demo: boolean | null): ProfileIdName;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}