import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class WebAssemblyType extends Enum<WebAssemblyType> {
    static anyref: WebAssemblyType;
    static exnref: WebAssemblyType;
    static externref: WebAssemblyType;
    static f32: WebAssemblyType;
    static f64: WebAssemblyType;
    static funcref: WebAssemblyType;
    static i32: WebAssemblyType;
    static i64: WebAssemblyType;
    static v128: WebAssemblyType;
    static lookup(paramtype: string): WebAssemblyType;
    static lookupElementKind(paramelementKind: string): WebAssemblyType;
    static lookupValueType(paramvalueType: string): WebAssemblyType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WebAssemblyType;
    static values(): WebAssemblyType[];
    private constructor()
    getDefaultValue(realm: JSRealm): Object;
    name(): "i32" | "i64" | "f32" | "f64" | "v128" | "funcref" | "externref" | "exnref" | "anyref";
}