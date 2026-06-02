import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export abstract class TypeReference<T extends Object | number | string | boolean> extends Object implements Comparable<TypeReference<T>> {
    constructor()
    // private _type: Type;
    compareTo(arg0: TypeReference<T>): number;
    getType(): Type;
}