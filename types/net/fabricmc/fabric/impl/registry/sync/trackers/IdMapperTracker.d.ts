import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class IdMapperTracker<V extends Object | number | string | boolean, OV extends Object | number | string | boolean> extends Object implements RegistryEntryAddedCallback<V>, RegistryIdRemapCallback<V> {
    static allEntries(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => void): void;
    static event(paramarg0: (Object | null)[]): Event<Object>;
    static event(paramarg0: (Object | null)[]): Event<Object>;
    static register(paramarg0: (Object | null)[], paramarg1: string, paramarg2: (Object | null)[]): void;
    private constructor(arg0: string, arg1: OV[])
    // private mappers: OV[];
    // private name: string;
    // private removedMapperCache: Map<Identifier, OV>;
    onEntryAdded(arg0: number, arg1: Identifier, arg2: V): void;
    onRemap(arg0: RegistryIdRemapCallback$RemapState<V>): void;
}