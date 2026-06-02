import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Snappy$State } from '../../../../../io/netty/handler/codec/compression/Snappy$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Snappy extends Object {
    static getHashTableFastThreadLocalArrayFill(paramarg0: number): number[];
    static withHashTableReuse(): Snappy;
    constructor()
    constructor(arg0: boolean)
    // private reuseHashtable: boolean;
    // private state: Snappy$State;
    // private tag: number;
    // private written: number;
    decode(arg0: ByteBuf, arg1: ByteBuf): void;
    encode(arg0: ByteBuf, arg1: ByteBuf, arg2: number): void;
    // private getHashTable(arg0: number): number[];
    getPreamble(arg0: ByteBuf): number;
    reset(): void;
}