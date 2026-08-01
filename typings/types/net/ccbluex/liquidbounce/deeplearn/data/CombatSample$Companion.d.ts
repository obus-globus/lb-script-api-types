import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CombatSample } from '../../../../../net/ccbluex/liquidbounce/deeplearn/data/CombatSample.d.ts'
export class CombatSample$Companion extends Object {
    // private AGE: string;
    // private CURRENT_DIRECTION_VECTOR: string;
    // private DELTA_VECTOR: string;
    // private DISTANCE: string;
    // private HURT_TIME: string;
    // private INPUT_SIZE: number;
    // private OUTPUT_SIZE: number;
    // private PREVIOUS_DIRECTION_VECTOR: string;
    // private P_DIFF: string;
    // private TARGET_DIRECTION_VECTOR: string;
    // private T_DIFF: string;
    // private parse(file: File): CombatSample[];
    parse(...files: File[]): CombatSample[];
}