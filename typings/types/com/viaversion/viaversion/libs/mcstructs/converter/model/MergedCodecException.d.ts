import type { CodecException } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/CodecException.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MergedCodecException extends CodecException {
    constructor(arg0: string, arg1: Result<Object>[])
    // private error: string;
    // private errors: Result<Object>[];
    readonly message: string | null;
}