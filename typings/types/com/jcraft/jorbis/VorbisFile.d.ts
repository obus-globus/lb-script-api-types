import type { Page } from '../../../com/jcraft/jogg/Page.d.ts'
import type { StreamState } from '../../../com/jcraft/jogg/StreamState.d.ts'
import type { SyncState } from '../../../com/jcraft/jogg/SyncState.d.ts'
import type { Block } from '../../../com/jcraft/jorbis/Block.d.ts'
import type { Comment } from '../../../com/jcraft/jorbis/Comment.d.ts'
import type { DspState } from '../../../com/jcraft/jorbis/DspState.d.ts'
import type { Info } from '../../../com/jcraft/jorbis/Info.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VorbisFile extends Object {
    constructor(arg0: InputStream, arg1: number[], arg2: number)
    constructor(arg0: string)
    // private bittrack: number;
    // private current_link: number;
    // private current_serialno: number;
    // private dataoffsets: number[];
    // private datasource: InputStream;
    // private decode_ready: boolean;
    // private end: number;
    // private links: number;
    // private offset: number;
    // private offsets: number[];
    // private os: StreamState;
    // private oy: SyncState;
    // private pcm_offset: number;
    // private pcmlengths: number[];
    // private samptrack: number;
    // private seekable: boolean;
    // private serialnos: number[];
    // private vb: Block;
    // private vc: Comment[];
    // private vd: DspState;
    // private vi: Info[];
    bisect_forward_serialno(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    bitrate(arg0: number): number;
    bitrate_instant(): number;
    clear(): number;
    close(): void;
    decode_clear(): void;
    fetch_headers(arg0: Info, arg1: Comment, arg2: number[], arg3: Page): number;
    getComment(): Comment[];
    getComment(arg0: number): Comment;
    getInfo(): Info[];
    getInfo(arg0: number): Info;
    // private get_data(): number;
    // private get_next_page(arg0: Page, arg1: number): number;
    // private get_prev_page(arg0: Page): number;
    host_is_big_endian(): number;
    // private make_decode_ready(): number;
    open(arg0: InputStream, arg1: number[], arg2: number): number;
    open_callbacks(arg0: InputStream, arg1: number[], arg2: number): number;
    open_nonseekable(): number;
    open_seekable(): number;
    pcm_seek(arg0: number): number;
    pcm_tell(): number;
    pcm_total(arg0: number): number;
    prefetch_all_headers(arg0: Info, arg1: Comment, arg2: number): void;
    process_packet(arg0: number): number;
    raw_seek(arg0: number): number;
    raw_tell(): number;
    raw_total(arg0: number): number;
    read(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number;
    // private seek_helper(arg0: number): void;
    seekable(): boolean;
    serialnumber(arg0: number): number;
    streams(): number;
    time_seek(arg0: number): number;
    time_tell(): number;
    time_total(arg0: number): number;
}