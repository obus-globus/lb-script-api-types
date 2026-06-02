import type { GameProfile } from '../../../com/mojang/authlib/GameProfile.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class UUIDUtil extends Object {
    static AUTHLIB_CODEC: Codec<UUID>;
    static CODEC: Codec<UUID>;
    static CODEC_LINKED_SET: Codec<Object>;
    static CODEC_SET: Codec<Object>;
    static LENIENT_CODEC: Codec<UUID>;
    static STREAM_CODEC: StreamCodec<ByteBuf, UUID>;
    static STRING_CODEC: Codec<UUID>;
    static UUID_BYTES: number;
    static createOfflinePlayerUUID(paramplayerName: string): UUID;
    static createOfflineProfile(paramplayerName: string): GameProfile;
    static readUUID(paraminput: Dynamic<Object>): UUID;
    static uuidFromIntArray(paramintArray: number[]): UUID;
    static uuidToByteArray(paramuuid: UUID): number[];
    static uuidToIntArray(paramuuid: UUID): number[];
    private constructor()
}