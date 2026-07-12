import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CombatSample } from '../../../../../net/ccbluex/liquidbounce/deeplearn/data/CombatSample.d.ts'
export class CombatSample$Companion extends Object {
    AGE: string;
    CURRENT_DIRECTION_VECTOR: string;
    DELTA_VECTOR: string;
    DISTANCE: string;
    HURT_TIME: string;
    PREVIOUS_DIRECTION_VECTOR: string;
    P_DIFF: string;
    TARGET_DIRECTION_VECTOR: string;
    T_DIFF: string;
    // private parse(file: File): CombatSample[];
    parse(...files: File[]): CombatSample[];
}