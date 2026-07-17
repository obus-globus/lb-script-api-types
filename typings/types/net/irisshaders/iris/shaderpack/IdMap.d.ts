import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object2IntFunction } from '../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StringPair } from '../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { BlockRenderType } from '../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { ShaderPackOptions } from '../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
export class IdMap extends Object {
    constructor(arg0: Path, arg1: ShaderPackOptions, arg2: StringPair[])
    // private blockPropertiesMap: JavaMap<any, any>;
    readonly blockRenderTypeMap: JavaMap<NamespacedId, BlockRenderType>;
    // private blockTagMap: JavaMap<any, any>;
    readonly entityIdMap: JavaMap<any, any>;
    readonly itemIdMap: JavaMap<any, any>;
    equals(arg0: Object | null): boolean;
    getBlockProperties(): JavaMap<any, any>;
    getBlockRenderTypeMap(): JavaMap<NamespacedId, BlockRenderType>;
    getEntityIdMap(): (param0: Object) => number;
    getItemIdMap(): (param0: Object) => number;
    getTagEntries(): JavaMap<any, any>;
    hashCode(): number;
}