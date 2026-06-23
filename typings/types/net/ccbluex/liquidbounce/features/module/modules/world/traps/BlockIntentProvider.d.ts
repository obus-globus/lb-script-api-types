import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockChangeIntent } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.d.ts'
import type { BlockHitResult } from '../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export interface BlockIntentProvider<T extends unknown> extends Object{
    onIntentFulfilled(intent: BlockChangeIntent<T>): void;
    validate(plan: BlockChangeIntent<T>, raycast: BlockHitResult): boolean;
}