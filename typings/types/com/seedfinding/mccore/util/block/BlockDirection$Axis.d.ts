import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockDirection$Axis extends Enum<BlockDirection$Axis> {
    static X: BlockDirection$Axis;
    static Y: BlockDirection$Axis;
    static Z: BlockDirection$Axis;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockDirection$Axis;
    static values(): BlockDirection$Axis[];
    private constructor()
    get2DRotated(): BlockDirection$Axis;
    name(): "X" | "Y" | "Z";
}