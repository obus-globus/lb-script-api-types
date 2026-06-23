import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface KProperty$Accessor<V extends unknown> extends Object{
    readonly property: KProperty<V>;
}