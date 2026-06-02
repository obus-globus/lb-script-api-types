import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export interface CustomQueryAnswerPayload extends Object{
    write(output: FriendlyByteBuf): void;
}