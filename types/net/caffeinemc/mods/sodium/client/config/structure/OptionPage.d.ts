import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionPage extends Record implements Page {
    constructor(name: Component, groups: OptionGroup[])
    // private groups: OptionGroup[];
    // private name: Component;
    equals(arg0: Object | null): boolean;
    groups(): OptionGroup[];
    hashCode(): number;
    name(): Component;
    registerTextSources(arg0: SearchIndex, arg1: ModOptions): void;
    toString(): string;
}