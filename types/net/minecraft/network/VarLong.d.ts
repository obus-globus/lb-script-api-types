import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VarLong extends Object {
    static getByteSize(paramvalue: number): number;
    static hasContinuationBit(paramin: number): boolean;
    static read(paraminput: ByteBuf): number;
    static write(paramoutput: ByteBuf, paramvalue: number): ByteBuf;
    constructor()
}