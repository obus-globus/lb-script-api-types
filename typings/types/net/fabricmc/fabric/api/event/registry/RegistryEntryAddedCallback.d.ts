import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RegistryEntryAddedCallback<T extends unknown> extends Object{
    onEntryAdded(arg0: number, arg1: Identifier, arg2: T): void;
}