import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TransitionGuard$Kind extends Enum<TransitionGuard$Kind> {
    static checkGroupMatched: TransitionGuard$Kind;
    static checkGroupNotMatched: TransitionGuard$Kind;
    static countGeMin: TransitionGuard$Kind;
    static countInc: TransitionGuard$Kind;
    static countLtMax: TransitionGuard$Kind;
    static countLtMin: TransitionGuard$Kind;
    static countSet1: TransitionGuard$Kind;
    static countSetMinInc: TransitionGuard$Kind;
    static enterZeroWidth: TransitionGuard$Kind;
    static escapeZeroWidth: TransitionGuard$Kind;
    static exitZeroWidth: TransitionGuard$Kind;
    static updateCG: TransitionGuard$Kind;
    static updateRecursiveBackrefPointer: TransitionGuard$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TransitionGuard$Kind;
    static values(): TransitionGuard$Kind[];
    private constructor()
    name(): "countInc" | "countSet1" | "countSetMinInc" | "countLtMin" | "countGeMin" | "countLtMax" | "enterZeroWidth" | "exitZeroWidth" | "escapeZeroWidth" | "updateCG" | "updateRecursiveBackrefPointer" | "checkGroupMatched" | "checkGroupNotMatched";
}