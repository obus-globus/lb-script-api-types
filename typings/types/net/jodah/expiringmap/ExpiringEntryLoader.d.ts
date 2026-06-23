import type { Object } from '../../../java/lang/Object.d.ts'
import type { ExpiringValue } from '../../../net/jodah/expiringmap/ExpiringValue.d.ts'
export interface ExpiringEntryLoader<K extends unknown, V extends unknown> extends Object{
    load(arg0: K): ExpiringValue<V>;
}