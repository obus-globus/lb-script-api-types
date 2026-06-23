import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeCapture<T extends unknown> extends Object {
    constructor()
    capture(): Type;
}