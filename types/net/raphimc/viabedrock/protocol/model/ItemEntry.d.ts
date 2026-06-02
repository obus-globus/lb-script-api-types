import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ItemVersion } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemVersion.d.ts'
export class ItemEntry extends Record {
    // private componentBased: boolean;
    // private componentData: Map$Entry<string, Tag>[];
    // private id: number;
    // private identifier: string;
    // private version: ItemVersion;
    componentBased(): boolean;
    componentData(): Map$Entry<string, Tag>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    identifier(): string;
    toString(): string;
    version(): ItemVersion;
}