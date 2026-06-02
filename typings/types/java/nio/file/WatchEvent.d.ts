import type { WatchEvent$Kind } from '../../../java/nio/file/WatchEvent$Kind.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WatchEvent<T extends Object | number | string | boolean> extends Object{
    context(): T;
    count(): number;
    kind(): WatchEvent$Kind<T>;
}