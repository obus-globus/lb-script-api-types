import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BreakingProgress } from '../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress.d.ts'
import type { BreakingProgress$Provider } from '../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress$Provider.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class BreakingProgress$Provider$Default extends Object implements BreakingProgress$Provider {
    static Default: BreakingProgress$Provider$Default;
    breakingProgress(): BreakingProgress | null;
    breakingProgress(pos: BlockPos): BreakingProgress | null;
}