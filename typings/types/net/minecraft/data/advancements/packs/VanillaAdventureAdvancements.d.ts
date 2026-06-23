import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { AdvancementSubProvider } from '../../../../../net/minecraft/data/advancements/AdvancementSubProvider.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class VanillaAdventureAdvancements extends Object implements AdvancementSubProvider {
    static createMonsterHunterAdvancement(paramparent: AdvancementHolder, paramoutput: (param0: AdvancementHolder) => void, paramentityTypes: HolderGetter<EntityType<any>>, parammobsToKill: EntityType<any>[]): AdvancementHolder;
    static createPlaceholder(paramid: string): AdvancementHolder;
    constructor()
    generate(registries: HolderLookup$Provider, output: (param0: AdvancementHolder) => void): void;
}