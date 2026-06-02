import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeCapture<T extends Object | number | string | boolean> extends Object {
    constructor()
    capture(): Type;
}