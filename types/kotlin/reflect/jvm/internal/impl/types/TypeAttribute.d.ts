import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
export abstract class TypeAttribute<T extends TypeAttribute<T>> extends Object {
    constructor()
    add(arg0: T): T;
    getKey(): KClass<T>;
    intersect(arg0: T): T;
}