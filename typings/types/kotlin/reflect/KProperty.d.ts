import type { Object } from '../../java/lang/Object.d.ts'
import type { KCallable } from '../../kotlin/reflect/KCallable.d.ts'
import type { KProperty$Getter } from '../../kotlin/reflect/KProperty$Getter.d.ts'
export interface KProperty<V extends Object | number | string | boolean> extends Object, KCallable<V>{
    readonly getter: KProperty$Getter<V>;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
}