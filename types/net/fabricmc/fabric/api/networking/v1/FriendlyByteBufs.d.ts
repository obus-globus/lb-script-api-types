import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class FriendlyByteBufs extends Object {
    static copy(paramarg0: ByteBuf): FriendlyByteBuf;
    static copy(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): FriendlyByteBuf;
    static create(): FriendlyByteBuf;
    static duplicate(paramarg0: ByteBuf): FriendlyByteBuf;
    static empty(): FriendlyByteBuf;
    static readBytes(paramarg0: ByteBuf, paramarg1: number): FriendlyByteBuf;
    static readRetainedSlice(paramarg0: ByteBuf, paramarg1: number): FriendlyByteBuf;
    static readSlice(paramarg0: ByteBuf, paramarg1: number): FriendlyByteBuf;
    static retainedDuplicate(paramarg0: ByteBuf): FriendlyByteBuf;
    static retainedSlice(paramarg0: ByteBuf): FriendlyByteBuf;
    static retainedSlice(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): FriendlyByteBuf;
    static slice(paramarg0: ByteBuf): FriendlyByteBuf;
    static slice(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): FriendlyByteBuf;
    private constructor()
}