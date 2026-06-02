import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FabricEntitySelectorParser extends Object{
    getCustomFlag(arg0: Identifier): boolean;
    setCustomFlag(arg0: Identifier, arg1: boolean): void;
}