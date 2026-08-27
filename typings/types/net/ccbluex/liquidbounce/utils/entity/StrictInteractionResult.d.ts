import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrictInteractionSource } from '../../../../../net/ccbluex/liquidbounce/utils/entity/StrictInteractionSource.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
/**
 * *Strict* means to 1:1 simulate {@link net.minecraft.client.Minecraft.startUseItem} logic:
 * Try `interact`/`useItemOn` then `useItem` with each hand (main hand -> offhand).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:68}
 */
export class StrictInteractionResult extends Record {
    constructor(hand: InteractionHand, source: StrictInteractionSource, result: InteractionResult)
    // private hand: InteractionHand;
    /*not mapped: */ hand(): InteractionHand;
    /*not mapped: */ isUseItemSuccess(): boolean;
    // private result: InteractionResult;
    /*not mapped: */ result(): InteractionResult;
    // private source: StrictInteractionSource;
    /*not mapped: */ source(): StrictInteractionSource;
    component1(): InteractionHand;
    component2(): StrictInteractionSource;
    component3(): InteractionResult;
    copy(hand: InteractionHand, source: StrictInteractionSource, result: InteractionResult): StrictInteractionResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}