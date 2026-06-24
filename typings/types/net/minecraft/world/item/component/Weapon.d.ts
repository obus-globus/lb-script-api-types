import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Weapon extends Record {
    static AXE_DISABLES_BLOCKING_FOR_SECONDS: number;
    static CODEC: Codec<Weapon>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Weapon>;
    constructor(damagePerAttack: number)
    constructor(itemDamagePerAttack: number, disableBlockingForSeconds: number)
    // private disableBlockingForSeconds: number;
    // private itemDamagePerAttack: number;
    disableBlockingForSeconds(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    itemDamagePerAttack(): number;
    toString(): string;
}