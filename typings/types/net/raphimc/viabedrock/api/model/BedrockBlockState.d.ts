import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BlockState } from '../../../../../net/raphimc/viabedrock/api/model/BlockState.d.ts'
export class BedrockBlockState extends BlockState {
    static AIR: BlockState;
    static INFO_UPDATE: BlockState;
    static STONE: BlockState;
    static fromNbt(paramarg0: Map$Entry<string, Tag>[]): BedrockBlockState;
    static fromString(paramarg0: string): BlockState;
    static sanitizeName(paramarg0: Map$Entry<string, Tag>[]): void;
    private constructor(arg0: string, arg1: string, arg2: JavaMap<string, string>, arg3: Map$Entry<string, Tag>[])
    // private blockStateTag: Map$Entry<string, Tag>[];
    blockStateTag(): Map$Entry<string, Tag>[];
}