import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface MappedLegacyBlockItem$BlockEntityHandler extends Object{
    handleCompoundTag(arg0: number, arg1: Map$Entry<string, Tag>[]): void;
}