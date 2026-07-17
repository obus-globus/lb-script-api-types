import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype extends Enum<AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype> implements BuiltinEnum<AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype> {
    static drop: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static every: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static filter: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static find: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static flatMap: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static forEach: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static map: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static reduce: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static some: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static symbolAsyncDispose: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static take: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static toArray: AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
    static values(): AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): AsyncIteratorPrototypeBuiltins$AsyncIteratorPrototype;
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
    name(): "map" | "filter" | "take" | "drop" | "flatMap" | "reduce" | "toArray" | "forEach" | "some" | "every" | "find" | "symbolAsyncDispose";
}