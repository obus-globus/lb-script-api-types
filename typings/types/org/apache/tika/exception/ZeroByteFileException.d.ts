import type { TikaException } from '../../../../org/apache/tika/exception/TikaException.d.ts'
import type { ZeroByteFileException$IgnoreZeroByteFileException } from '../../../../org/apache/tika/exception/ZeroByteFileException$IgnoreZeroByteFileException.d.ts'
export class ZeroByteFileException extends TikaException {
    static IGNORE_ZERO_BYTE_FILE_EXCEPTION: ZeroByteFileException$IgnoreZeroByteFileException;
    constructor(arg0: string)
}