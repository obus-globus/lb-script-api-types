import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { ItemUseAnimation } from '../../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
export class InteractionTracker$Interaction extends Record {
    constructor(hand: InteractionHand, action: ItemUseAnimation)
    // private action: ItemUseAnimation;
    /*not mapped: */ action(): ItemUseAnimation;
    // private hand: InteractionHand;
    /*not mapped: */ hand(): InteractionHand;
    component1(): InteractionHand;
    component2(): ItemUseAnimation;
    copy(hand: InteractionHand, action: ItemUseAnimation): InteractionTracker$Interaction;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}