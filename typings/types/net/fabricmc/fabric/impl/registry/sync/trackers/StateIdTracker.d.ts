import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Holder$Reference } from '../../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class StateIdTracker<T extends Object | number | string | boolean, S extends Object | number | string | boolean> extends Object implements RegistryEntryAddedCallback<T>, RegistryIdRemapCallback<T> {
    static allEntries(paramarg0: (Object | null)[], paramarg1: (param0: Holder$Reference<Object>) => void): void;
    static event(paramarg0: (Object | null)[]): Event<(param0: number, param1: Identifier, param2: Object | null) => void>;
    static event(paramarg0: (Object | null)[]): Event<(param0: RegistryIdRemapCallback$RemapState<Object>) => void>;
    static register(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: (param0: Object | null) => (Object | null)[]): void;
    private constructor(arg0: T[], arg1: S[], arg2: (param0: T) => S[])
    // private currentHighestId: number;
    // private registry: T[];
    // private stateGetter: (param0: T) => S[];
    // private stateList: S[];
    onEntryAdded(arg0: number, arg1: Identifier, arg2: T): void;
    onRemap(arg0: RegistryIdRemapCallback$RemapState<T>): void;
    // private recalcHighestId(): void;
    // private recalcStateMap(): void;
}