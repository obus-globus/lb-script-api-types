import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class CopyKt extends Object {
    static copyTo(self: Source, output: Sink): number;
}