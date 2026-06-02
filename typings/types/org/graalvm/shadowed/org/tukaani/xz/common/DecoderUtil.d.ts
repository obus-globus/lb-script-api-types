import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { StreamFlags } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/StreamFlags.d.ts'
import type { Util } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/Util.d.ts'
export class DecoderUtil extends Util {
    static BACKWARD_SIZE_MAX: number;
    static BLOCK_HEADER_SIZE_MAX: number;
    static STREAM_HEADER_SIZE: number;
    static VLI_MAX: number;
    static VLI_SIZE_MAX: number;
    static areStreamFlagsEqual(parama: StreamFlags, paramb: StreamFlags): boolean;
    static decodeStreamFooter(parambuf: number[]): StreamFlags;
    static decodeStreamHeader(parambuf: number[]): StreamFlags;
    static decodeVLI(paramin: InputStream): number;
    static getVLISize(paramnum: number): number;
    static isCRC32Valid(parambuf: number[], paramoff: number, paramlen: number, paramref_off: number): boolean;
    constructor()
}