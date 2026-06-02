import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export interface FabricResourceReloader extends Object, PreparableReloadListener{
    fabric$getId(): Identifier;
    getName(): string;
    getName(): string;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
}