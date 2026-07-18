import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CloseableKt extends Object {
    static use<R extends unknown, T extends Closeable>(self: T, block: (param0: T) => R): R;
}