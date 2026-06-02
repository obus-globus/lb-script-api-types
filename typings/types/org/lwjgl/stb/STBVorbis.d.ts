import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { STBVorbisAlloc } from '../../../org/lwjgl/stb/STBVorbisAlloc.d.ts'
import type { STBVorbisComment } from '../../../org/lwjgl/stb/STBVorbisComment.d.ts'
import type { STBVorbisInfo } from '../../../org/lwjgl/stb/STBVorbisInfo.d.ts'
export class STBVorbis extends Object {
    static VORBIS__no_error: number;
    static VORBIS_bad_packet_type: number;
    static VORBIS_cant_find_last_page: number;
    static VORBIS_continued_packet_flag_invalid: number;
    static VORBIS_feature_not_supported: number;
    static VORBIS_file_open_failure: number;
    static VORBIS_incorrect_stream_serial_number: number;
    static VORBIS_invalid_api_mixing: number;
    static VORBIS_invalid_first_page: number;
    static VORBIS_invalid_setup: number;
    static VORBIS_invalid_stream: number;
    static VORBIS_invalid_stream_structure_version: number;
    static VORBIS_missing_capture_pattern: number;
    static VORBIS_need_more_data: number;
    static VORBIS_ogg_skeleton_not_supported: number;
    static VORBIS_outofmem: number;
    static VORBIS_seek_failed: number;
    static VORBIS_seek_invalid: number;
    static VORBIS_seek_without_length: number;
    static VORBIS_too_many_channels: number;
    static VORBIS_unexpected_eof: number;
    static nstb_vorbis_close(paramarg0: number): void;
    static nstb_vorbis_decode_filename(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number): number;
    static nstb_vorbis_decode_filename(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_decode_frame_pushdata(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number, paramarg5: number[]): number;
    static nstb_vorbis_decode_frame_pushdata(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstb_vorbis_decode_memory(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number): number;
    static nstb_vorbis_decode_memory(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstb_vorbis_flush_pushdata(paramarg0: number): void;
    static nstb_vorbis_get_comment(paramarg0: number, paramarg1: number): void;
    static nstb_vorbis_get_error(paramarg0: number): number;
    static nstb_vorbis_get_file_offset(paramarg0: number): number;
    static nstb_vorbis_get_frame_float(paramarg0: number, paramarg1: number[], paramarg2: number): number;
    static nstb_vorbis_get_frame_float(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstb_vorbis_get_frame_short(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_frame_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_frame_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): number;
    static nstb_vorbis_get_info(paramarg0: number, paramarg1: number): void;
    static nstb_vorbis_get_sample_offset(paramarg0: number): number;
    static nstb_vorbis_get_samples_float(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_samples_float_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): number;
    static nstb_vorbis_get_samples_float_interleaved(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_samples_short(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_samples_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_get_samples_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): number;
    static nstb_vorbis_open_filename(paramarg0: number, paramarg1: number[], paramarg2: number): number;
    static nstb_vorbis_open_filename(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstb_vorbis_open_memory(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): number;
    static nstb_vorbis_open_memory(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nstb_vorbis_open_pushdata(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number): number;
    static nstb_vorbis_open_pushdata(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstb_vorbis_seek(paramarg0: number, paramarg1: number): number;
    static nstb_vorbis_seek_frame(paramarg0: number, paramarg1: number): number;
    static nstb_vorbis_seek_start(paramarg0: number): number;
    static nstb_vorbis_stream_length_in_samples(paramarg0: number): number;
    static nstb_vorbis_stream_length_in_seconds(paramarg0: number): number;
    static stb_vorbis_close(paramarg0: number): void;
    static stb_vorbis_decode_filename(paramarg0: CharSequence, paramarg1: number[], paramarg2: number[], paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_filename(paramarg0: CharSequence, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_filename(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: number[], paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_filename(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_filename(paramarg0: CharSequence, paramarg1: IntBuffer, paramarg2: IntBuffer): ShortBuffer;
    static stb_vorbis_decode_frame_pushdata(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number[], paramarg3: PointerBuffer, paramarg4: number[]): number;
    static stb_vorbis_decode_frame_pushdata(paramarg0: number, paramarg1: ByteBuffer, paramarg2: IntBuffer, paramarg3: PointerBuffer, paramarg4: IntBuffer): number;
    static stb_vorbis_decode_memory(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: number[], paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_memory(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: PointerBuffer): number;
    static stb_vorbis_decode_memory(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer): ShortBuffer;
    static stb_vorbis_flush_pushdata(paramarg0: number): void;
    static stb_vorbis_get_comment(paramarg0: number, paramarg1: STBVorbisComment): STBVorbisComment;
    static stb_vorbis_get_error(paramarg0: number): number;
    static stb_vorbis_get_file_offset(paramarg0: number): number;
    static stb_vorbis_get_frame_float(paramarg0: number, paramarg1: number[], paramarg2: PointerBuffer): number;
    static stb_vorbis_get_frame_float(paramarg0: number, paramarg1: IntBuffer, paramarg2: PointerBuffer): number;
    static stb_vorbis_get_frame_short(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number): number;
    static stb_vorbis_get_frame_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer): number;
    static stb_vorbis_get_frame_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static stb_vorbis_get_info(paramarg0: number, paramarg1: STBVorbisInfo): STBVorbisInfo;
    static stb_vorbis_get_sample_offset(paramarg0: number): number;
    static stb_vorbis_get_samples_float(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number): number;
    static stb_vorbis_get_samples_float_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static stb_vorbis_get_samples_float_interleaved(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): number;
    static stb_vorbis_get_samples_short(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number): number;
    static stb_vorbis_get_samples_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer): number;
    static stb_vorbis_get_samples_short_interleaved(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static stb_vorbis_open_filename(paramarg0: CharSequence, paramarg1: number[], paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_filename(paramarg0: CharSequence, paramarg1: IntBuffer, paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_filename(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_filename(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_memory(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_memory(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: STBVorbisAlloc): number;
    static stb_vorbis_open_pushdata(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: number[], paramarg3: STBVorbisAlloc): number;
    static stb_vorbis_open_pushdata(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: STBVorbisAlloc): number;
    static stb_vorbis_seek(paramarg0: number, paramarg1: number): boolean;
    static stb_vorbis_seek_frame(paramarg0: number, paramarg1: number): boolean;
    static stb_vorbis_seek_start(paramarg0: number): boolean;
    static stb_vorbis_stream_length_in_samples(paramarg0: number): number;
    static stb_vorbis_stream_length_in_seconds(paramarg0: number): number;
    constructor()
}