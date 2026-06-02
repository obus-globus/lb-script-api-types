import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRegistry } from '../../../../../../net/fabricmc/fabric/api/event/registry/FabricRegistry.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RegistryMixin extends Object, FabricRegistry{
    addAlias(arg0: Identifier, arg1: Identifier): void;
}