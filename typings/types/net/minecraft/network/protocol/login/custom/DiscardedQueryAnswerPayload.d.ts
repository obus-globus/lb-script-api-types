import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { CustomQueryAnswerPayload } from '../../../../../../net/minecraft/network/protocol/login/custom/CustomQueryAnswerPayload.d.ts'
export class DiscardedQueryAnswerPayload extends Record implements CustomQueryAnswerPayload {
    static INSTANCE: DiscardedQueryAnswerPayload;
    constructor()
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}