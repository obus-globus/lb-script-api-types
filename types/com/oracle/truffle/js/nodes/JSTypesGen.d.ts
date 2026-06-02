import type { JSTypes } from '../../../../../com/oracle/truffle/js/nodes/JSTypes.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSTypesGen extends JSTypes {
    static asBigInt(paramvalue: Object): BigInt;
    static asBoolean(paramvalue: Object): boolean;
    static asDouble(paramvalue: Object): number;
    static asImplicitDouble(paramstate: number, paramvalue: Object): number;
    static asImplicitDouble(paramvalue: Object): number;
    static asInteger(paramvalue: Object): number;
    static asLong(paramvalue: Object): number;
    static asSafeInteger(paramvalue: Object): SafeInteger;
    static expectBigInt(paramvalue: Object): BigInt;
    static expectBoolean(paramvalue: Object): boolean;
    static expectDouble(paramvalue: Object): number;
    static expectImplicitDouble(paramstate: number, paramvalue: Object): number;
    static expectInteger(paramvalue: Object): number;
    static expectLong(paramvalue: Object): number;
    static expectSafeInteger(paramvalue: Object): SafeInteger;
    static intToDouble(paramvalue: number): number;
    static isBigInt(paramvalue: Object): boolean;
    static isBoolean(paramvalue: Object): boolean;
    static isDouble(paramvalue: Object): boolean;
    static isImplicitDouble(paramstate: number, paramvalue: Object): boolean;
    static isImplicitDouble(paramvalue: Object): boolean;
    static isInteger(paramvalue: Object): boolean;
    static isLong(paramvalue: Object): boolean;
    static isSafeInteger(paramvalue: Object): boolean;
    static safeIntegerToDouble(paramvalue: SafeInteger): number;
    static specializeImplicitDouble(paramvalue: Object): number;
    constructor()
}