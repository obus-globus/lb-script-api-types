import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ControlValueFormatter } from '../../../../../../net/caffeinemc/mods/sodium/api/config/option/ControlValueFormatter.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface IntegerOptionBuilderImplAccessor extends Object {
    iris$getValueFormatter(): (param0: number) => Component;
}