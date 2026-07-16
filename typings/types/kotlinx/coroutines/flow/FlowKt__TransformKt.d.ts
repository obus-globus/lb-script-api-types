import type { Object } from '../../../java/lang/Object.d.ts'
import type { IndexedValue } from '../../../kotlin/collections/IndexedValue.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__TransformKt extends Object {
    static chunked<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T[]>;
    static filter<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static filterIsInstance<R extends unknown>(paramarg0: Flow<Object>): Flow<R>;
    static filterIsInstance<R extends unknown>(paramarg0: Flow<Object>, paramarg1: KClass<R>): Flow<R>;
    static filterNot<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static filterNotNull<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static map<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static mapNotNull<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static onEach<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static runningFold<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: R, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static runningReduce<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<T>;
    static scan<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: R, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static withIndex<T extends unknown>(paramarg0: Flow<T>): Flow<IndexedValue<T>>;
}