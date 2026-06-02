import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { CompassAngleState } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/CompassAngleState.d.ts'
import type { CompassAngleState$CompassTarget } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/CompassAngleState$CompassTarget.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CompassAngle extends Object implements RangeSelectItemModelProperty {
    static MAP_CODEC: MapCodec<CompassAngle>;
    constructor(wobble: boolean, compassTarget: CompassAngleState$CompassTarget)
    private constructor(state: CompassAngleState)
    // private state: CompassAngleState;
    get(itemStack: ItemStack, level: ClientLevel, owner: ItemOwner, seed: number): number;
    type(): MapCodec<CompassAngle>;
}