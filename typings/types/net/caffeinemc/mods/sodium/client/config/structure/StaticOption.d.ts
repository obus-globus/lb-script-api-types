import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class StaticOption extends Option {
    constructor(arg0: Identifier, arg1: Identifier[], arg2: Component, arg3: DependentValue<boolean>, arg4: Component)
    readonly tooltip: Component;
    getTooltip(): Component;
}