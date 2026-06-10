import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class OptionBuilderImpl<O extends Option> extends Object implements OptionBuilder {
    constructor(arg0: Identifier)
    // private baseOption: O;
    // private enabled: DependentValue<boolean>;
    // private id: Identifier;
    // private name: Component;
    build(): O;
    buildWithBaseOption(arg0: Option): O;
    getDependencies(): Identifier[];
    getEnabled(): DependentValue<boolean>;
    getFirstNotNull<V extends Object | number | string | boolean>(arg0: V, arg1: (param0: O) => V): V;
    getName(): Component;
    getOptionClass(): Class<O>;
    prepareBuild(): void;
    setEnabled(arg0: boolean): OptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): OptionBuilder;
    setName(arg0: Component): OptionBuilder;
    validateData(): void;
}