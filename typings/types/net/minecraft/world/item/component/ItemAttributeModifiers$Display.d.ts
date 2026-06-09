import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemAttributeModifiers$Display$Type } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display$Type.d.ts'
export interface ItemAttributeModifiers$Display extends Object {
    apply(consumer: (param0: Component) => void, player: Player, attribute: Holder<Attribute>, modifier: AttributeModifier): void;
    type(): ItemAttributeModifiers$Display$Type;
}