import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Utf8String extends Object {
    static read(paraminput: ByteBuf, parammaxLength: number): string;
    static write(paramoutput: ByteBuf, paramvalue: CharSequence, parammaxLength: number): void;
    constructor()
}