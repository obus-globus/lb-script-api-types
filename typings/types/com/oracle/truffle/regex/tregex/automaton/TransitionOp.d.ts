import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionOp extends Object {
    static NO_OP: number[];
    static NO_SOURCE: number;
    static inc: number;
    static maintain: number;
    static noModifier: number;
    static overwrite: number;
    static set1: number;
    static swap: number;
    static union: number;
    static create(paramqId: number, paramsource: number, paramtarget: number, paramkind: number): number;
    static create(paramqId: number, paramsource: number, paramtarget: number, paramkind: number, parammodifier: number): number;
    static getKind(paramop: number): number;
    static getModifier(paramop: number): number;
    static getQuantifierID(paramop: number): number;
    static getSource(paramop: number): number;
    static getTarget(paramop: number): number;
    static normalize(paramoperations: number[]): void;
    static setModifier(parammodifier: number, paramop: number): number;
    static setSourceAndTarget(paramop: number, paramnewSource: number, paramnewTarget: number): number;
    static setTarget(paramop: number, paramnewTarget: number): number;
    static toJson(paramop: number): JsonValue;
    static toString(paramoperation: number): string;
    constructor()
}