import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeToken$Bounds extends Object {
    constructor(bounds: Type[], target: boolean)
    // private bounds: Type[];
    // private target: boolean;
    isSubtypeOf(supertype: Type): boolean;
    isSupertypeOf(subtype: Type): boolean;
}