import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Util } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/Util.d.ts'
export class EncoderUtil extends Util {
    static BACKWARD_SIZE_MAX: number;
    static BLOCK_HEADER_SIZE_MAX: number;
    static STREAM_HEADER_SIZE: number;
    static VLI_MAX: number;
    static VLI_SIZE_MAX: number;
    static encodeVLI(paramout: OutputStream, paramnum: number): void;
    static getVLISize(paramnum: number): number;
    static writeCRC32(paramout: OutputStream, parambuf: number[]): void;
    constructor()
}