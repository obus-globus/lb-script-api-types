import type { Object2IntFunction } from '../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StringPair } from '../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { BlockEntry } from '../../../../net/irisshaders/iris/shaderpack/materialmap/BlockEntry.d.ts'
import type { BlockRenderType } from '../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { TagEntry } from '../../../../net/irisshaders/iris/shaderpack/materialmap/TagEntry.d.ts'
import type { ShaderPackOptions } from '../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
export class IdMap extends Object {
    constructor(arg0: Path[], arg1: ShaderPackOptions, arg2: StringPair[])
    // private blockPropertiesMap: Int2ObjectLinkedOpenHashMap<BlockEntry[]>;
    readonly blockRenderTypeMap: Map<NamespacedId, BlockRenderType>;
    // private blockTagMap: Int2ObjectLinkedOpenHashMap<TagEntry[]>;
    readonly entityIdMap: Object2IntMap<NamespacedId>;
    readonly itemIdMap: Object2IntMap<NamespacedId>;
    equals(arg0: Object | null): boolean;
    getBlockProperties(): Int2ObjectLinkedOpenHashMap<BlockEntry[]>;
    getBlockRenderTypeMap(): Map<NamespacedId, BlockRenderType>;
    getEntityIdMap(): (param0: Object) => number;
    getItemIdMap(): (param0: Object) => number;
    getTagEntries(): Int2ObjectLinkedOpenHashMap<TagEntry[]>;
    hashCode(): number;
}