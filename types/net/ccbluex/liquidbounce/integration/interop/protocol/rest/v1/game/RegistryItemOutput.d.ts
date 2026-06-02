import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class RegistryItemOutput extends Record {
    constructor(name: string, icon: string | null)
    // private icon: string | null;
    /*not mapped: */ icon(): string | null;
    // private name: string;
    /*not mapped: */ name(): string;
    component1(): string;
    component2(): string | null;
    copy(name: string, icon: string | null): RegistryItemOutput;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}