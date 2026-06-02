import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RegistryEntryAddedCallback<T extends Object | number | string | boolean> extends Object{
    onEntryAdded(arg0: number, arg1: Identifier, arg2: T): void;
}