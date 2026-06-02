import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OperationArgument$Operation } from '../../../../net/minecraft/commands/arguments/OperationArgument$Operation.d.ts'
import type { ScoreAccess } from '../../../../net/minecraft/world/scores/ScoreAccess.d.ts'
export interface OperationArgument$SimpleOperation extends Object, OperationArgument$Operation{
    apply(a: number, b: number): number;
    apply(a: ScoreAccess, b: ScoreAccess): void;
}