import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class CommonRegisterPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, CommonRegisterPayload>;
    static CONFIGURATION_PROTOCOL: string;
    static PLAY_PROTOCOL: string;
    static TYPE: CustomPacketPayload$Type<CommonRegisterPayload>;
    constructor(version: number, protocol: string, channels: Identifier[])
    // private channels: Identifier[];
    // private protocol: string;
    // private version: number;
    channels(): Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    protocol(): string;
    toString(): string;
    type(): CustomPacketPayload$Type<CommonRegisterPayload>;
    version(): number;
    write(arg0: FriendlyByteBuf): void;
}