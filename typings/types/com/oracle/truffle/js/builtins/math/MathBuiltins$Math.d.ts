import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MathBuiltins$Math extends Enum<MathBuiltins$Math> implements BuiltinEnum<MathBuiltins$Math> {
    static abs: MathBuiltins$Math;
    static acos: MathBuiltins$Math;
    static acosh: MathBuiltins$Math;
    static asin: MathBuiltins$Math;
    static asinh: MathBuiltins$Math;
    static atan: MathBuiltins$Math;
    static atan2: MathBuiltins$Math;
    static atanh: MathBuiltins$Math;
    static cbrt: MathBuiltins$Math;
    static ceil: MathBuiltins$Math;
    static clz32: MathBuiltins$Math;
    static cos: MathBuiltins$Math;
    static cosh: MathBuiltins$Math;
    static exp: MathBuiltins$Math;
    static expm1: MathBuiltins$Math;
    static f16round: MathBuiltins$Math;
    static floor: MathBuiltins$Math;
    static fround: MathBuiltins$Math;
    static hypot: MathBuiltins$Math;
    static imul: MathBuiltins$Math;
    static log: MathBuiltins$Math;
    static log10: MathBuiltins$Math;
    static log1p: MathBuiltins$Math;
    static log2: MathBuiltins$Math;
    static max: MathBuiltins$Math;
    static min: MathBuiltins$Math;
    static pow: MathBuiltins$Math;
    static random: MathBuiltins$Math;
    static round: MathBuiltins$Math;
    static sign: MathBuiltins$Math;
    static sin: MathBuiltins$Math;
    static sinh: MathBuiltins$Math;
    static sqrt: MathBuiltins$Math;
    static sumPrecise: MathBuiltins$Math;
    static tan: MathBuiltins$Math;
    static tanh: MathBuiltins$Math;
    static trunc: MathBuiltins$Math;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MathBuiltins$Math;
    static values(): MathBuiltins$Math[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): MathBuiltins$Math;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAOTSupported(): boolean;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnabled(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "abs" | "acos" | "asin" | "atan2" | "atan" | "ceil" | "cos" | "exp" | "floor" | "log" | "max" | "min" | "pow" | "random" | "round" | "sin" | "sqrt" | "tan" | "imul" | "sign" | "trunc" | "cbrt" | "expm1" | "hypot" | "log2" | "log10" | "log1p" | "clz32" | "cosh" | "sinh" | "tanh" | "acosh" | "asinh" | "atanh" | "fround" | "f16round" | "sumPrecise";
}