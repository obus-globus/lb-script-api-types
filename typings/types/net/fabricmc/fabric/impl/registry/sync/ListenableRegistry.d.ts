import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryIdRemapCallback } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ListenableRegistry<T extends Object | number | string | boolean> extends Object {
    fabric_getAddObjectEvent(): Event<(param0: T, param1: number, param2: Identifier) => void>;
    fabric_getRemapEvent(): Event<(param0: T) => void>;
}