import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VarIntAccessor } from '../../../net/fabricmc/fabric/mixin/attachment/VarIntAccessor.d.ts'
export class VarInt extends Object implements VarIntAccessor {
    static MAX_VARINT_SIZE: number;
    static getByteSize(paramvalue: number): number;
    static getMaxByteSize(): number;
    static hasContinuationBit(paramin: number): boolean;
    static read(paraminput: ByteBuf): number;
    static write(paramoutput: ByteBuf, paramvalue: number): ByteBuf;
    constructor()
}