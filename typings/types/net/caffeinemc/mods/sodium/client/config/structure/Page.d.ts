import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface Page extends Object{
    groups(): OptionGroup[];
    name(): Component;
    registerTextSources(arg0: SearchIndex, arg1: ModOptions): void;
}