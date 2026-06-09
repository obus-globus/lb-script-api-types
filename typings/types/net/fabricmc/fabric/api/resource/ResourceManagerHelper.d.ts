import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IdentifiableResourceReloadListener } from '../../../../../net/fabricmc/fabric/api/resource/IdentifiableResourceReloadListener.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ResourceManagerHelper extends Object {
    addReloadListener(arg0: IdentifiableResourceReloadListener): void;
    registerReloadListener(arg0: IdentifiableResourceReloadListener): void;
    registerReloadListener(arg0: Identifier, arg1: (param0: HolderLookup$Provider) => IdentifiableResourceReloadListener): void;
}