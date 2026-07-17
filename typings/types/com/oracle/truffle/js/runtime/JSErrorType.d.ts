import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { PrototypeSupplier } from '../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class JSErrorType extends Enum<JSErrorType> implements PrototypeSupplier {
    static AggregateError: JSErrorType;
    static CompileError: JSErrorType;
    static Error: JSErrorType;
    static EvalError: JSErrorType;
    static LinkError: JSErrorType;
    static RangeError: JSErrorType;
    static ReferenceError: JSErrorType;
    static RuntimeError: JSErrorType;
    static SuppressedError: JSErrorType;
    static SyntaxError: JSErrorType;
    static TypeError: JSErrorType;
    static URIError: JSErrorType;
    static errorTypes(): JSErrorType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSErrorType;
    static values(): JSErrorType[];
    private constructor()
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    name(): "Error" | "EvalError" | "RangeError" | "ReferenceError" | "SyntaxError" | "TypeError" | "URIError" | "AggregateError" | "SuppressedError" | "CompileError" | "LinkError" | "RuntimeError";
}