import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class DeprecationKt extends Object {
    static IO_DEPRECATION_MESSAGE: string;
    static readText(self: Source): string;
    static release(self: Sink): void;
}