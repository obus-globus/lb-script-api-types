import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BlockProperties extends Record {
    constructor(name: string, properties: Map$Entry<string, Tag>[])
    // private name: string;
    // private properties: Map$Entry<string, Tag>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    properties(): Map$Entry<string, Tag>[];
    toString(): string;
}