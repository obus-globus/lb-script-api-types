import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class PayloadHelper extends Object {
    static read(paramarg0: FriendlyByteBuf, paramarg1: number): FriendlyByteBuf;
    static write(paramarg0: FriendlyByteBuf, paramarg1: FriendlyByteBuf): void;
    constructor()
}