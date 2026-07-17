import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Int2ObjectMapTracker<V extends unknown, OV extends unknown> extends Object implements RegistryEntryAddedCallback<V>, RegistryIdRemapCallback<V> {
    static register<V extends unknown, OV extends unknown>(paramarg0: V[], paramarg1: string, paramarg2: JavaMap<any, any>): void;
    private constructor(arg0: string, arg1: JavaMap<any, any>)
    // private mappers: JavaMap<any, any>;
    // private name: string;
    // private removedMapperCache: JavaMap<Identifier, OV>;
    onEntryAdded(arg0: number, arg1: Identifier, arg2: V): void;
    onRemap(arg0: RegistryIdRemapCallback$RemapState<V>): void;
}