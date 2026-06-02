import type { CodecException } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/CodecException.d.ts'
export class MergedCodecException extends CodecException {
    constructor(arg0: string, arg1: E[])
    // private error: string;
    // private errors: E[];
    readonly message: string | null;
}