import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BlockStateSanitizer } from '../../../../../net/raphimc/viabedrock/api/chunk/blockstate/BlockStateSanitizer.d.ts'
import type { BlockState } from '../../../../../net/raphimc/viabedrock/api/model/BlockState.d.ts'
import type { BlockProperties } from '../../../../../net/raphimc/viabedrock/protocol/model/BlockProperties.d.ts'
export class BlockStateRewriter extends Object implements StorableObject {
    constructor(arg0: BlockProperties[], arg1: boolean)
    // private blockStateIdMappings: Int2IntMap;
    // private blockStateMappings: Map<BlockState, number>;
    // private blockStateSanitizer: BlockStateSanitizer;
    // private blockStateTags: Int2ObjectMap<string>;
    // private legacyBlockStateIdMappings: Int2IntMap;
    // private validBlockStates: { [key: string]: (Object | null)[] };
    bedrockId(arg0: Map$Entry<string, Tag>[]): number;
    bedrockId(arg0: number): number;
    bedrockId(arg0: BlockState): number;
    blockState(arg0: number): BlockState;
    javaId(arg0: number): number;
    onRemove(): void;
    tag(arg0: number): string;
    validBlockStates(arg0: string): (Object | null)[];
    waterlog(arg0: number): number;
}