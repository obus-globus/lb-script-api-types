import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class AtomicBoolean extends Object {
    constructor(v: boolean, trace: TraceBase)
    // private _value: number;
    readonly trace: TraceBase;
    value: boolean;
    compareAndSet(expect: boolean, update: boolean): boolean;
    getAndSet(value: boolean): boolean;
    getValue(thisRef: Object | null, property: KProperty<Object>): boolean;
    lazySet(value: boolean): void;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: boolean): void;
    toString(): string;
}