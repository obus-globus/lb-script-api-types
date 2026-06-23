import type { Holder } from '../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EitherHolder<T extends unknown> extends Object{
    hasHolder(): boolean;
    hasKey(): boolean;
    holder(): Holder<T>;
    key(): string;
}