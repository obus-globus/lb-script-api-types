import type { Holder } from '../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { Int2IntFunction } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IdHolder<T extends Object | number | string | boolean> extends Record implements Holder<T> {
    static of(paramarg0: Object | null): Holder<Object>;
    static of(paramarg0: number): Holder<Object>;
    // private id: number;
}