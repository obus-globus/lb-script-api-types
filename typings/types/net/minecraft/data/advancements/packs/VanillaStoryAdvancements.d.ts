import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { AdvancementSubProvider } from '../../../../../net/minecraft/data/advancements/AdvancementSubProvider.d.ts'
export class VanillaStoryAdvancements extends Object implements AdvancementSubProvider {
    static createPlaceholder(paramid: string): AdvancementHolder;
    constructor()
    generate(registries: HolderLookup$Provider, output: (param0: AdvancementHolder) => void): void;
}