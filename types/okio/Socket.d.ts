import type { Object } from '../java/lang/Object.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export interface Socket extends Object{
    readonly sink: Sink;
    readonly source: Source;
    cancel(): void;
}