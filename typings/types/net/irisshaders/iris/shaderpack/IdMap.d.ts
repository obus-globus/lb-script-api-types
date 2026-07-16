import type { Object2IntFunction } from '../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StringPair } from '../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { BlockRenderType } from '../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { ShaderPackOptions } from '../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
export class IdMap extends Object {
    constructor(arg0: Path, arg1: ShaderPackOptions, arg2: StringPair[])
    // private blockPropertiesMap: { [key: string]: any };
    readonly blockRenderTypeMap: Map<NamespacedId, BlockRenderType>;
    // private blockTagMap: { [key: string]: any };
    readonly entityIdMap: { [key: string]: any };
    readonly itemIdMap: { [key: string]: any };
    equals(arg0: Object | null): boolean;
    getBlockProperties(): { [key: string]: any };
    getBlockRenderTypeMap(): Map<NamespacedId, BlockRenderType>;
    getEntityIdMap(): (param0: Object) => number;
    getItemIdMap(): (param0: Object) => number;
    getTagEntries(): { [key: string]: any };
    hashCode(): number;
}