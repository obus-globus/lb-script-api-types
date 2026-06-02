import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemModelPropertyTest } from '../../../../../../../net/minecraft/client/renderer/item/properties/conditional/ItemModelPropertyTest.d.ts'
export interface ConditionalItemModelProperty extends Object, ItemModelPropertyTest{
    type(): MapCodec<ConditionalItemModelProperty>;
}