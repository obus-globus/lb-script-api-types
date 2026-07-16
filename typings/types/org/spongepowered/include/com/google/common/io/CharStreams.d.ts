import type { Readable } from '../../../../../../../java/lang/Readable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export class CharStreams extends Object {
    static readLines<T extends unknown>(paramarg0: Readable, paramarg1: LineProcessor<T>): T;
}