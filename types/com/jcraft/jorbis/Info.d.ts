import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { Packet } from '../../../com/jcraft/jogg/Packet.d.ts'
import type { Comment } from '../../../com/jcraft/jorbis/Comment.d.ts'
import type { InfoMode } from '../../../com/jcraft/jorbis/InfoMode.d.ts'
import type { PsyInfo } from '../../../com/jcraft/jorbis/PsyInfo.d.ts'
import type { StaticCodeBook } from '../../../com/jcraft/jorbis/StaticCodeBook.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Info extends Object {
    constructor()
    // private bitrate_lower: number;
    // private bitrate_nominal: number;
    // private bitrate_upper: number;
    // private blocksizes: number[];
    // private book_param: StaticCodeBook[];
    // private books: number;
    channels: number;
    // private envelopesa: number;
    // private floor_param: Object[];
    // private floor_type: number[];
    // private floors: number;
    // private map_param: Object[];
    // private map_type: number[];
    // private maps: number;
    // private mode_param: InfoMode[];
    // private modes: number;
    // private preecho_clamp: number;
    // private preecho_thresh: number;
    // private psy_param: PsyInfo[];
    // private psys: number;
    rate: number;
    // private residue_param: Object[];
    // private residue_type: number[];
    // private residues: number;
    // private time_param: Object[];
    // private time_type: number[];
    // private times: number;
    version: number;
    blocksize(arg0: Packet): number;
    clear(): void;
    init(): void;
    pack_books(arg0: Buffer): number;
    pack_info(arg0: Buffer): number;
    synthesis_headerin(arg0: Comment, arg1: Packet): number;
    toString(): string;
    unpack_books(arg0: Buffer): number;
    unpack_info(arg0: Buffer): number;
}