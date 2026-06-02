import type { Flushable } from '../../../../java/io/Flushable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Flushables extends Object {
    static flush(paramflushable: Flushable, paramswallowIOException: boolean): void;
    static flushQuietly(paramflushable: Flushable): void;
    private constructor()
}