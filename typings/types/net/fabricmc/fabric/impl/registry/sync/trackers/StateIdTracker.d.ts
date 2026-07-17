import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class StateIdTracker<T extends unknown, S extends unknown> extends Object implements RegistryEntryAddedCallback<T>, RegistryIdRemapCallback<T> {
    static register<T extends unknown, S extends unknown>(paramarg0: T[], paramarg1: S[], paramarg2: (param0: T) => S[]): void;
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