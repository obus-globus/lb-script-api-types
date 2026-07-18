import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PoolKt extends Object {
    static useBorrowed<R extends unknown, T extends unknown>(self: ObjectPool<T>, block: (param0: T) => R): R;
    static useInstance<R extends unknown, T extends unknown>(self: ObjectPool<T>, block: (param0: T) => R): R;
}