import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TextureProperty extends Record {
    constructor(name: string, value: string, signature: string | null)
    // private name: string;
    /*not mapped: */ name(): string;
    // private signature: string | null;
    /*not mapped: */ signature(): string | null;
    // private value: string;
    /*not mapped: */ value(): string;
    component1(): string;
    component2(): string;
    component3(): string | null;
    copy(name: string, value: string, signature: string | null): TextureProperty;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}