import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Advancement } from '../../../net/minecraft/advancements/Advancement.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class AdvancementHolder extends Record {
    static LIST_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, AdvancementHolder[]>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, AdvancementHolder>;
    constructor(id: Identifier, value: Advancement)
    // private id: Identifier;
    // private value: Advancement;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    value(): Advancement;
}