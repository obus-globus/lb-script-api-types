import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
export class FieldSelector extends Record {
    constructor(grandparent: string, parent: string, type: TagType<any>, name: string)
    constructor(parent: string, type: TagType<any>, name: string)
    constructor(path: string[], type: TagType<any>, name: string)
    constructor(type: TagType<any>, name: string)
    // private name: string;
    // private path: string[];
    // private type: TagType<any>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    path(): string[];
    toString(): string;
    type(): TagType<any>;
}