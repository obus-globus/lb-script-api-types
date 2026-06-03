import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
import type { NullableArrayMapAccessor } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/NullableArrayMapAccessor.d.ts'
export abstract class TypeRegistry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor()
    // private idCounter: AtomicInteger;
    // private idPerType: { [key: string]: number };
    allValuesThreadUnsafeForRendering(): { [key: string]: number };
    customComputeIfAbsent(arg0: { [key: string]: number }, arg1: string, arg2: (param0: string) => number): number;
    generateNullableAccessor(arg0: KClass<KK>): NullableArrayMapAccessor<K, V, T>;
    getId(arg0: string): number;
    getId(arg0: KClass<T>): number;
    getIndices(): E[];
}