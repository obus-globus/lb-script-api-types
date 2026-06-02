import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class AtomicLong extends Object {
    constructor(value: number, trace: TraceBase)
    readonly trace: TraceBase;
    value: number;
    addAndGet(delta: number): number;
    compareAndSet(expect: number, update: number): boolean;
    decrementAndGet(): number;
    getAndAdd(delta: number): number;
    getAndDecrement(): number;
    getAndIncrement(): number;
    getAndSet(value: number): number;
    getValue(thisRef: Object | null, property: KProperty<Object>): number;
    incrementAndGet(): number;
    lazySet(value: number): void;
    minusAssign(delta: number): void;
    plusAssign(delta: number): void;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: number): void;
    toString(): string;
}