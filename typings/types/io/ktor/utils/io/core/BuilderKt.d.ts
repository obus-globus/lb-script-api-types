import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class BuilderKt extends Object {
    static buildPacket(block: (param0: Sink) => void): Source;
}