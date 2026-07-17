import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
import type { NullableArrayMapAccessor } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/NullableArrayMapAccessor.d.ts'
export abstract class TypeRegistry<K extends unknown, V extends unknown> extends Object {
    constructor()
    // private idCounter: AtomicInteger;
    // private idPerType: JavaMap<string, number>;
    allValuesThreadUnsafeForRendering(): JavaMap<string, number>;
    customComputeIfAbsent(arg0: JavaMap<string, number>, arg1: string, arg2: (param0: string) => number): number;
    generateNullableAccessor<T extends V, KK extends K>(arg0: KClass<KK>): NullableArrayMapAccessor<K, V, T>;
    getId(arg0: string): number;
    getId<T extends K>(arg0: KClass<T>): number;
    getIndices(): number[];
}