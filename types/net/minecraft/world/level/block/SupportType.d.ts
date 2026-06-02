import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SupportType extends Enum<SupportType> {
    static CENTER: SupportType;
    static FULL: SupportType;
    static RIGID: SupportType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SupportType;
    static values(): (Object | null)[];
    private constructor()
    isSupporting(state: BlockState, level: BlockGetter, pos: BlockPos, direction: Direction): boolean;
    name(): "FULL" | "CENTER" | "RIGID";
}