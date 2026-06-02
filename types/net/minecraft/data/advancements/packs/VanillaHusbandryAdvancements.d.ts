import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { AdvancementSubProvider } from '../../../../../net/minecraft/data/advancements/AdvancementSubProvider.d.ts'
export class VanillaHusbandryAdvancements extends Object implements AdvancementSubProvider {
    static BREEDABLE_ANIMALS: (Object | null)[];
    static INDIRECTLY_BREEDABLE_ANIMALS: (Object | null)[];
    static WAX_SCRAPING_TOOLS: (Object | null)[];
    static createBreedAllAnimalsAdvancement(paramparent: AdvancementHolder, paramoutput: (param0: AdvancementHolder) => void, paramentityTypes: HolderGetter<Object>, parambreedable: Stream<Object>, paramindirectlyBreedable: Stream<Object>): AdvancementHolder;
    static createPlaceholder(paramid: string): AdvancementHolder;
    constructor()
    generate(registries: HolderLookup$Provider, output: (param0: AdvancementHolder) => void): void;
}