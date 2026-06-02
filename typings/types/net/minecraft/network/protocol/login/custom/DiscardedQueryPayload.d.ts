import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { CustomQueryPayload } from '../../../../../../net/minecraft/network/protocol/login/custom/CustomQueryPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DiscardedQueryPayload extends Record implements CustomQueryPayload {
    constructor(id: Identifier)
    // private id: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}