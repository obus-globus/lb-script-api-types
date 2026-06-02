import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class AtomicRef<T extends Object | number | string | boolean> extends Object {
    constructor(value: T, trace: TraceBase)
    readonly trace: TraceBase;
    value: T;
    compareAndSet(expect: T, update: T): boolean;
    getAndSet(value: T): T;
    getValue(thisRef: Object | null, property: KProperty<Object>): T;
    lazySet(value: T): void;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: T): void;
    toString(): string;
}