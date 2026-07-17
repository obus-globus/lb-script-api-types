import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IteratorPrototypeBuiltins$IteratorPrototype extends Enum<IteratorPrototypeBuiltins$IteratorPrototype> implements BuiltinEnum<IteratorPrototypeBuiltins$IteratorPrototype> {
    // inaccessible (TS-reserved member name): static constructor: IteratorPrototypeBuiltins$IteratorPrototype;
    static drop: IteratorPrototypeBuiltins$IteratorPrototype;
    static every: IteratorPrototypeBuiltins$IteratorPrototype;
    static filter: IteratorPrototypeBuiltins$IteratorPrototype;
    static find: IteratorPrototypeBuiltins$IteratorPrototype;
    static flatMap: IteratorPrototypeBuiltins$IteratorPrototype;
    static forEach: IteratorPrototypeBuiltins$IteratorPrototype;
    static map: IteratorPrototypeBuiltins$IteratorPrototype;
    static reduce: IteratorPrototypeBuiltins$IteratorPrototype;
    static set_constructor: IteratorPrototypeBuiltins$IteratorPrototype;
    static set_symbolToStringTag: IteratorPrototypeBuiltins$IteratorPrototype;
    static some: IteratorPrototypeBuiltins$IteratorPrototype;
    static symbolDispose: IteratorPrototypeBuiltins$IteratorPrototype;
    static symbolToStringTag: IteratorPrototypeBuiltins$IteratorPrototype;
    static take: IteratorPrototypeBuiltins$IteratorPrototype;
    static toArray: IteratorPrototypeBuiltins$IteratorPrototype;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IteratorPrototypeBuiltins$IteratorPrototype;
    static values(): IteratorPrototypeBuiltins$IteratorPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): IteratorPrototypeBuiltins$IteratorPrototype;
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
    name(): "toArray" | "forEach" | "some" | "every" | "find" | "reduce" | "map" | "filter" | "take" | "drop" | "flatMap" | "symbolDispose" | "constructor" | "set_constructor" | "symbolToStringTag" | "set_symbolToStringTag";
}