import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AtomicsBuiltins$Atomics extends Enum<AtomicsBuiltins$Atomics> implements BuiltinEnum<AtomicsBuiltins$Atomics> {
    static add: AtomicsBuiltins$Atomics;
    static and: AtomicsBuiltins$Atomics;
    static compareExchange: AtomicsBuiltins$Atomics;
    static exchange: AtomicsBuiltins$Atomics;
    static isLockFree: AtomicsBuiltins$Atomics;
    static load: AtomicsBuiltins$Atomics;
    static notify: AtomicsBuiltins$Atomics;
    static or: AtomicsBuiltins$Atomics;
    static pause: AtomicsBuiltins$Atomics;
    static store: AtomicsBuiltins$Atomics;
    static sub: AtomicsBuiltins$Atomics;
    static wait: AtomicsBuiltins$Atomics;
    static waitAsync: AtomicsBuiltins$Atomics;
    static xor: AtomicsBuiltins$Atomics;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AtomicsBuiltins$Atomics;
    static values(): AtomicsBuiltins$Atomics[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): AtomicsBuiltins$Atomics;
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
    name(): "compareExchange" | "load" | "store" | "add" | "sub" | "and" | "or" | "xor" | "exchange" | "wait" | "isLockFree" | "notify" | "waitAsync" | "pause";
}