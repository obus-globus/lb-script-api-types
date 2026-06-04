import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalInstantPrototypeBuiltins$TemporalInstantPrototype extends Enum<TemporalInstantPrototypeBuiltins$TemporalInstantPrototype> implements BuiltinEnum<TemporalInstantPrototypeBuiltins$TemporalInstantPrototype> {
    static add: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static epochMilliseconds: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static epochNanoseconds: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static equals: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static round: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static since: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static subtract: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static toJSON: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static toLocaleString: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static toString: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static toZonedDateTimeISO: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static until: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static valueOf: TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalInstantPrototypeBuiltins$TemporalInstantPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
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
    name(): "epochMilliseconds" | "epochNanoseconds" | "add" | "subtract" | "until" | "since" | "round" | "equals" | "toString" | "toLocaleString" | "toJSON" | "valueOf" | "toZonedDateTimeISO";
}