import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { Config } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Config.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { OptionPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionPage.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Control } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class Option extends Object {
    constructor(arg0: Identifier, arg1: Identifier[], arg2: Component, arg3: DependentValue<boolean>)
    control: Control;
    // private dependencies: Identifier[];
    readonly enabled: DependentValue<boolean>;
    // private id: Identifier;
    readonly name: Component;
    // private state: Config;
    applyChanges(): boolean;
    createControl(): Control;
    getControl(): Control;
    getEnabled(): DependentValue<boolean>;
    getFlags(): Identifier[];
    getImpact(): OptionImpact;
    getName(): Component;
    getTooltip(): Component;
    hasChanged(): boolean;
    isEnabled(): boolean;
    loadValueInitial(): void;
    registerTextSources(arg0: SearchIndex, arg1: ModOptions, arg2: OptionPage, arg3: OptionGroup): void;
    resetFromBinding(): void;
    resetToDefault(): void;
    setParentConfig(arg0: Config): void;
    visitDependentValues(arg0: (param0: DependentValue<Object>) => void): void;
}