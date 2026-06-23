import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Holder$Reference } from '../../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class IdMapperTracker<V extends unknown, OV extends unknown> extends Object implements RegistryEntryAddedCallback<V>, RegistryIdRemapCallback<V> {
    static allEntries(paramarg0: (Object | null)[], paramarg1: (param0: Holder$Reference<Object>) => void): void;
    static event(paramarg0: (Object | null)[]): Event<(param0: number, param1: Identifier, param2: Object | null) => void>;
    static event(paramarg0: (Object | null)[]): Event<(param0: RegistryIdRemapCallback$RemapState<Object>) => void>;
    static register(paramarg0: (Object | null)[], paramarg1: string, paramarg2: (Object | null)[]): void;
    private constructor(arg0: string, arg1: OV[])
    // private mappers: OV[];
    // private name: string;
    // private removedMapperCache: Map<Identifier, OV>;
    onEntryAdded(arg0: number, arg1: Identifier, arg2: V): void;
    onRemap(arg0: RegistryIdRemapCallback$RemapState<V>): void;
}