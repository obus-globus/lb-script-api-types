import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { CustomQueryAnswerPayload } from '../../../../../../net/minecraft/network/protocol/login/custom/CustomQueryAnswerPayload.d.ts'
export class FriendlyByteBufLoginQueryResponse extends Record implements CustomQueryAnswerPayload {
    constructor(data: FriendlyByteBuf)
    // private data: FriendlyByteBuf;
    data(): FriendlyByteBuf;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write(arg0: FriendlyByteBuf): void;
}