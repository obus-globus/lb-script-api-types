import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RemapStateImpl<T extends unknown> extends Object implements RegistryIdRemapCallback$RemapState<T> {
    constructor(arg0: T[], arg1: JavaMap<any, any>, arg2: JavaMap<any, any>)
    // private newIdMap: JavaMap<any, any>;
    // private oldIdMap: JavaMap<any, any>;
    readonly rawIdChangeMap: JavaMap<any, any>;
    getIdFromNew(arg0: number): Identifier;
    getIdFromOld(arg0: number): Identifier;
    getRawIdChangeMap(): JavaMap<any, any>;
}