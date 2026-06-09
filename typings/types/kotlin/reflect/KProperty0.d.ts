import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { KProperty0$Getter } from '../../kotlin/reflect/KProperty0$Getter.d.ts'
export interface KProperty0<V extends Object | number | string | boolean> extends Object, KProperty<V> {
    readonly getter: KProperty0$Getter<V>;
    get(): V;
    getDelegate(): Object | null;
}