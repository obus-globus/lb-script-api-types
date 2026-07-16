import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NumberFormatPrototypeBuiltins$NumberFormatPrototype extends Enum<NumberFormatPrototypeBuiltins$NumberFormatPrototype> implements BuiltinEnum<NumberFormatPrototypeBuiltins$NumberFormatPrototype> {
    static format: NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static formatRange: NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static formatRangeToParts: NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static formatToParts: NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static resolvedOptions: NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NumberFormatPrototypeBuiltins$NumberFormatPrototype;
    static values(): NumberFormatPrototypeBuiltins$NumberFormatPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): NumberFormatPrototypeBuiltins$NumberFormatPrototype;
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
    name(): "resolvedOptions" | "formatToParts" | "formatRange" | "formatRangeToParts" | "format";
}