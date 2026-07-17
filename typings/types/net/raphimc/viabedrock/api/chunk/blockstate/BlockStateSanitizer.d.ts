import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { BedrockBlockState } from '../../../../../../net/raphimc/viabedrock/api/model/BedrockBlockState.d.ts'
export class BlockStateSanitizer extends Object {
    constructor(arg0: BedrockBlockState[])
    // private allowedPropertyValues: JavaMap<string, JavaMap<string, Object[]>>;
    sanitize(arg0: Map$Entry<string, Tag>[]): void;
}