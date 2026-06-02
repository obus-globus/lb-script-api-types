import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface StatusBarHeightProvider extends ToIntFunction<Player>, Object{
    applyAsInt(arg0: Player): number;
    getStatusBarHeight(arg0: Player): number;
}