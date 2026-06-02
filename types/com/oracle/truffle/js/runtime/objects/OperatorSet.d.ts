import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class OperatorSet extends Object {
    static ALL_OPERATORS: TruffleString[];
    static BIGINT_OPERATOR_SET: OperatorSet;
    static BINARY_OPERATORS: TruffleString[];
    static NUMBER_OPERATOR_SET: OperatorSet;
    static STRING_OPERATOR_SET: OperatorSet;
    static UNARY_OPERATORS: TruffleString[];
    static getOperatorImplementation(paramoperand: JSOverloadedOperatorsObject, paramoperatorName: TruffleString): Object;
    static getOperatorImplementation(paramleft: Object, paramright: Object, paramoperatorName: TruffleString): Object;
    static getOperatorSet(paramobject: Object): OperatorSet;
    static isUnsupportedPrimitive(paramvalue: Object): boolean;
    constructor(operatorCounter: number, selfOperatorDefinitions: EconomicMap<TruffleString, Object>, leftOperatorDefinitions: EconomicMap<TruffleString, Object[]>, rightOperatorDefinitions: EconomicMap<TruffleString, Object[]>, openOperators: TruffleString[])
    constructor(operatorCounter: number, openOperators: TruffleString[])
    // private leftOperatorDefinitions: EconomicMap<TruffleString, Object[]>;
    // private openOperators: TruffleString[];
    readonly operatorCounter: number;
    // private rightOperatorDefinitions: EconomicMap<TruffleString, Object[]>;
    // private selfOperatorDefinitions: EconomicMap<TruffleString, Object>;
    getOperatorCounter(): number;
    isOperatorOpen(operator: TruffleString): boolean;
}