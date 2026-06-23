import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Typed<T extends unknown> extends Object{
    getType(): Type;
}