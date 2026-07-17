import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RegistryIdRemapCallback$RemapState<T extends unknown> extends Object{
    getIdFromNew(arg0: number): Identifier;
    getIdFromOld(arg0: number): Identifier;
    getRawIdChangeMap(): JavaMap<any, any>;
}