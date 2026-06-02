import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { OptionPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionPage.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionGroup extends Record {
    constructor(name: Component, options: Option[])
    // private name: Component;
    // private options: Option[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): Component;
    options(): Option[];
    registerTextSources(arg0: SearchIndex, arg1: ModOptions, arg2: OptionPage): void;
    toString(): string;
}