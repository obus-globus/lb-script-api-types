import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class CompoundTagConverter extends Object implements TagConverter<Map$Entry<string, Tag>[], JavaMap<Object | null, Object | null>> {
    constructor()
    convert(arg0: Map$Entry<string, Tag>[]): JavaMap<Object | null, Object | null>;
    convert(arg0: JavaMap<Object | null, Object | null>): Map$Entry<string, Tag>[];
}