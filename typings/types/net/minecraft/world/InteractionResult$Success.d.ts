import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { InteractionResult } from '../../../net/minecraft/world/InteractionResult.d.ts'
import type { InteractionResult$Fail } from '../../../net/minecraft/world/InteractionResult$Fail.d.ts'
import type { InteractionResult$ItemContext } from '../../../net/minecraft/world/InteractionResult$ItemContext.d.ts'
import type { InteractionResult$Pass } from '../../../net/minecraft/world/InteractionResult$Pass.d.ts'
import type { InteractionResult$SwingSource } from '../../../net/minecraft/world/InteractionResult$SwingSource.d.ts'
import type { InteractionResult$TryEmptyHandInteraction } from '../../../net/minecraft/world/InteractionResult$TryEmptyHandInteraction.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class InteractionResult$Success extends Record implements InteractionResult {
    static CONSUME: InteractionResult$Success;
    static FAIL: InteractionResult$Fail;
    static PASS: InteractionResult$Pass;
    static SUCCESS: InteractionResult$Success;
    static SUCCESS_SERVER: InteractionResult$Success;
    static TRY_WITH_EMPTY_HAND: InteractionResult$TryEmptyHandInteraction;
    constructor(swingSource: InteractionResult$SwingSource, itemContext: InteractionResult$ItemContext)
    // private itemContext: InteractionResult$ItemContext;
    // private swingSource: InteractionResult$SwingSource;
    consumesAction(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heldItemTransformedTo(): ItemStack;
    heldItemTransformedTo(itemStack: ItemStack): InteractionResult$Success;
    itemContext(): InteractionResult$ItemContext;
    swingSource(): InteractionResult$SwingSource;
    toString(): string;
    wasItemInteraction(): boolean;
    withoutItem(): InteractionResult$Success;
}