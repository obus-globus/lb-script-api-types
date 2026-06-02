import type { TransitionConstraint$MergeResult } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionConstraint$MergeResult.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionConstraint$MergeResultBuilder extends Object {
    private constructor(originalLhs: number[], originalRhs: number[])
    // private lhs: T[];
    // private middle: number[];
    // private originalLhs: number[];
    // private originalRhs: number[];
    // private rhs: T[];
    addConstraintToLeft(constraint: number): void;
    addConstraintToRight(constraint: number): void;
    // private addToMiddleAndValidate(constraint: number): boolean;
    // private build(): TransitionConstraint$MergeResult;
    // private duplicateFormulaLeft(appendConstraint: number, leftIndex: number): void;
    // private duplicateFormulaRight(appendConstraint: number, rightIndex: number): void;
}