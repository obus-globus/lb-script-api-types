import type { Object } from '../../../../java/lang/Object.d.ts'
export class PktUtils extends Object {
    static HEX_CHAR: string[];
    static MAX_PACKET_SIZE: number;
    static intFromByteArray(paramb: number[], paramoffset: number): number;
    static intFromByteArray(paramb: number[], paramoffset: number, paramlength: number): number;
    static intFromNetworkByteArray(paramb: number[], paramoffset: number, paramlength: number): number;
    static stringFromByteArray(paramb: number[], paramoffset: number, paramlength: number): string;
    static toHexString(paramb: number): string;
    constructor()
}