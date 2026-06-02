import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ScoreAccess } from '../../../../net/minecraft/world/scores/ScoreAccess.d.ts'
export interface OperationArgument$Operation extends Object{
    apply(a: ScoreAccess, b: ScoreAccess): void;
}