import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
export interface CacheRequest extends Object{
    abort(): void;
    body(): Sink;
}