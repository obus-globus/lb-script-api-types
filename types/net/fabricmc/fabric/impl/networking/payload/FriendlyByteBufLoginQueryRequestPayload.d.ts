import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { CustomQueryPayload } from '../../../../../../net/minecraft/network/protocol/login/custom/CustomQueryPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FriendlyByteBufLoginQueryRequestPayload extends Record implements CustomQueryPayload {
    constructor(id: Identifier, data: FriendlyByteBuf)
    // private data: FriendlyByteBuf;
    // private id: Identifier;
    data(): FriendlyByteBuf;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    write(arg0: FriendlyByteBuf): void;
}