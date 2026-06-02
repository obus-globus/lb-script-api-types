import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { UncheckedIOException } from '../../../../java/io/UncheckedIOException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UncheckedIOExceptions extends Object {
    static create(paramarg0: Object): UncheckedIOException;
    static wrap(paramarg0: IOException, paramarg1: Object): UncheckedIOException;
    private constructor()
}