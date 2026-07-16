import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class WebAssemblyValueType extends Enum<WebAssemblyValueType> {
    static anyfunc: WebAssemblyValueType;
    static externref: WebAssemblyValueType;
    static f32: WebAssemblyValueType;
    static f64: WebAssemblyValueType;
    static i32: WebAssemblyValueType;
    static i64: WebAssemblyValueType;
    static v128: WebAssemblyValueType;
    static lookupType(paramtype: string): WebAssemblyValueType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WebAssemblyValueType;
    static values(): WebAssemblyValueType[];
    private constructor(reference: boolean)
    readonly reference: boolean;
    getDefaultValue(realm: JSRealm): Object;
    isReference(): boolean;
    name(): "i32" | "i64" | "f32" | "f64" | "v128" | "anyfunc" | "externref";
}