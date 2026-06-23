import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RemapStateImpl<T extends Object | number | string | boolean> extends Object implements RegistryIdRemapCallback$RemapState<T> {
    constructor(arg0: T[], arg1: { [key: string]: any }, arg2: { [key: string]: any })
    // private newIdMap: { [key: string]: any };
    // private oldIdMap: { [key: string]: any };
    readonly rawIdChangeMap: { [key: string]: any };
    getIdFromNew(arg0: number): Identifier;
    getIdFromOld(arg0: number): Identifier;
    getRawIdChangeMap(): { [key: string]: any };
}