import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { NoSlowUseActionHandler } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.d.ts'
import type { Vec2 } from '../../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class NoSlowBlock extends NoSlowUseActionHandler {
    static INSTANCE: NoSlowBlock;
    readonly modes: ModeValueGroup<Mode>;
    // private onlySlowOnServerSide: boolean;
    // private /*not mapped: */ getOnlySlowOnServerSide(): boolean;
    readonly running: boolean;
    getMultiplier(forward: number, sideways: number): Vec2;
}