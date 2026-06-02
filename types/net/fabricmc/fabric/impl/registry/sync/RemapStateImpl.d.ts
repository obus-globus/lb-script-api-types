import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RemapStateImpl<T extends Object | number | string | boolean> extends Object implements RegistryIdRemapCallback$RemapState<T> {
    constructor(arg0: T[], arg1: Int2ObjectMap<Identifier>, arg2: Int2IntMap)
    // private newIdMap: Int2ObjectMap<Identifier>;
    // private oldIdMap: Int2ObjectMap<Identifier>;
    readonly rawIdChangeMap: Int2IntMap;
    getIdFromNew(arg0: number): Identifier;
    getIdFromOld(arg0: number): Identifier;
    getRawIdChangeMap(): Int2IntMap;
}