import type { EitherHolder } from '../../../../../com/viaversion/viaversion/api/minecraft/EitherHolder.d.ts'
import type { Holder } from '../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { EitherImpl } from '../../../../../com/viaversion/viaversion/util/EitherImpl.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EitherHolderImpl<T extends unknown> extends EitherImpl<Holder<T>, string> implements EitherHolder<T> {
    static of<T extends unknown>(paramarg0: Holder<T>): EitherHolder<T>;
    static of<T extends unknown>(paramarg0: string): EitherHolder<T>;
    constructor(arg0: Holder<T>, arg1: string)
    hasHolder(): boolean;
    hasKey(): boolean;
    holder(): Holder<T>;
    key(): string;
}