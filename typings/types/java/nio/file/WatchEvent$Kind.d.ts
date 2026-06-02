import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WatchEvent$Kind<T extends Object | number | string | boolean> extends Object{
    name(): string;
    type(): Class<T>;
}