import type { TransitionConstraint$MergeResult } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionConstraint$MergeResult.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionConstraint extends Object {
    static NO_CONSTRAINTS: number[];
    static allGeMax: number;
    static allGeMin: number;
    static allLtMin: number;
    static anyGeMin: number;
    static anyLtMax: number;
    static anyLtMin: number;
    static areOpposite(paramconstraint1: number, paramconstraint2: number): boolean;
    static combineToJson(paramconstraints: number[], paramoperations: number[]): Stream<JsonValue>;
    static create(paramquantID: number, paramstateID: number, paramkind: number): number;
    static getID(paramconstraint: number): number;
    static getKind(paramconstraint: number): number;
    static getQuantifierID(paramconstraint: number): number;
    static getStateID(paramconstraint: number): number;
    static intersectAndSubtract(paramlhs: number[], paramrhs: number[]): TransitionConstraint$MergeResult;
    static isNormalized(paramconstraints: number[]): boolean;
    static normalize(paramconstraints: number[]): number[];
    static not(paramconstraint: number): number;
    static setStateID(paramconstraint: number, paramstateID: number): number;
    static toJson(paramconstraint: number): JsonValue;
    static toString(paramconstraint: number): string;
    static toString(paramconstraints: number[], paramdelimiter: string): string;
    constructor()
}