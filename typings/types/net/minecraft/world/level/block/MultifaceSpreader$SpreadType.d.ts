import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { MultifaceSpreader$SpreadPos } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadPos.d.ts'
export class MultifaceSpreader$SpreadType extends Enum<MultifaceSpreader$SpreadType> {
    static SAME_PLANE: MultifaceSpreader$SpreadType;
    static SAME_POSITION: MultifaceSpreader$SpreadType;
    static WRAP_AROUND: MultifaceSpreader$SpreadType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MultifaceSpreader$SpreadType;
    static values(): MultifaceSpreader$SpreadType[];
    private constructor()
    getSpreadPos(pos: BlockPos, spreadDirection: Direction, fromFace: Direction): MultifaceSpreader$SpreadPos;
    name(): "SAME_POSITION" | "SAME_PLANE" | "WRAP_AROUND";
}