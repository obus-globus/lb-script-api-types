import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SnbtToNbt$StructureConversionException extends RuntimeException {
    constructor(path: Path[], t: Throwable)
}