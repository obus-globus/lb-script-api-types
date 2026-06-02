import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MapLike<T extends Object | number | string | boolean> extends Object{
    entries(): Stream<Pair<T, T>>;
    get(arg0: T): T;
    get(arg0: string): T;
}