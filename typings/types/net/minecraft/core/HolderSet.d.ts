import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class HolderSet<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static direct<E extends unknown, T extends unknown>(paramholderGetter: (param0: E) => Holder<T>, ...paramelements: E[]): T[];
    static direct<E extends unknown, T extends unknown>(paramholderGetter: (param0: E) => Holder<T>, paramelements: E[]): T[];
    static direct<T extends unknown>(paramvalues: Holder<T>[]): T[];
    static direct<T extends unknown>(...paramvalues: Holder<T>[]): T[];
    static empty<T extends unknown>(): Holder<T>[];
    static emptyNamed<T extends unknown>(paramowner: HolderOwner<T>, paramkey: TagKey<T>): T[];
}