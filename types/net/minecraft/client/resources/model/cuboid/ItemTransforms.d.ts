import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemTransform } from '../../../../../../net/minecraft/client/resources/model/cuboid/ItemTransform.d.ts'
import type { ItemDisplayContext } from '../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class ItemTransforms extends Record {
    static NO_TRANSFORMS: ItemTransforms;
    constructor(thirdPersonLeftHand: ItemTransform, thirdPersonRightHand: ItemTransform, firstPersonLeftHand: ItemTransform, firstPersonRightHand: ItemTransform, head: ItemTransform, gui: ItemTransform, ground: ItemTransform, fixed: ItemTransform, fixedFromBottom: ItemTransform)
    // private firstPersonLeftHand: ItemTransform;
    // private firstPersonRightHand: ItemTransform;
    // private fixed: ItemTransform;
    // private fixedFromBottom: ItemTransform;
    // private ground: ItemTransform;
    // private gui: ItemTransform;
    // private head: ItemTransform;
    // private thirdPersonLeftHand: ItemTransform;
    // private thirdPersonRightHand: ItemTransform;
    equals(o: Object | null): boolean;
    firstPersonLeftHand(): ItemTransform;
    firstPersonRightHand(): ItemTransform;
    fixed(): ItemTransform;
    fixedFromBottom(): ItemTransform;
    getTransform(type: ItemDisplayContext): ItemTransform;
    ground(): ItemTransform;
    gui(): ItemTransform;
    hashCode(): number;
    head(): ItemTransform;
    thirdPersonLeftHand(): ItemTransform;
    thirdPersonRightHand(): ItemTransform;
    toString(): string;
}