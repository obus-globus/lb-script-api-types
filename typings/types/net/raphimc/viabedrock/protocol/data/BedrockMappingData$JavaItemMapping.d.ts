import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BedrockMappingData$JavaItemMapping extends Record {
    constructor(id: number, identifier: string, name: string, overrideTag: Map$Entry<string, Tag>[])
    // private id: number;
    // private identifier: string;
    // private name: string;
    // private overrideTag: Map$Entry<string, Tag>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    identifier(): string;
    name(): string;
    overrideTag(): Map$Entry<string, Tag>[];
    toString(): string;
}