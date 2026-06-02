import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { Packet } from '../../../com/jcraft/jogg/Packet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Comment extends Object {
    constructor()
    comment_lengths: number[];
    comments: number;
    user_comments: number[][];
    vendor: number[];
    // private add(arg0: number[]): void;
    add(arg0: string): void;
    add_tag(arg0: string, arg1: string): void;
    clear(): void;
    getComment(arg0: number): string;
    getVendor(): string;
    header_out(arg0: Packet): number;
    init(): void;
    pack(arg0: Buffer): number;
    // private query(arg0: number[], arg1: number): number;
    query(arg0: string): string;
    query(arg0: string, arg1: number): string;
    toString(): string;
    unpack(arg0: Buffer): number;
}