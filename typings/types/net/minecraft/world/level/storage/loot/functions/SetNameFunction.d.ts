import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { SetNameFunction$Target } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetNameFunction$Target.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetNameFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetNameFunction>;
    static createResolver(paramcontext: LootContext, paramentityTarget: LootContext$EntityTarget): (param0: Component) => Object | null;
    static setName(paramvalue: Component, paramtarget: SetNameFunction$Target): LootItemConditionalFunction$Builder<Object>;
    static setName(paramvalue: Component, paramtarget: SetNameFunction$Target, paramresolutionContext: LootContext$EntityTarget): LootItemConditionalFunction$Builder<Object>;
    private constructor(predicates: LootItemCondition[], name: Optional<Component>, resolutionContext: Optional<LootContext$EntityTarget>, target: SetNameFunction$Target)
    // private name: Optional<Component>;
    // private resolutionContext: Optional<LootContext$EntityTarget>;
    // private target: SetNameFunction$Target;
    codec(): MapCodec<SetNameFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}