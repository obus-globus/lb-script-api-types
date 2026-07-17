import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class RegistrationPayload extends Record implements CustomPacketPayload {
    static REGISTER: CustomPacketPayload$Type<RegistrationPayload>;
    static REGISTER_CODEC: StreamCodec<FriendlyByteBuf, RegistrationPayload>;
    static UNREGISTER: CustomPacketPayload$Type<RegistrationPayload>;
    static UNREGISTER_CODEC: StreamCodec<FriendlyByteBuf, RegistrationPayload>;
    constructor(type: CustomPacketPayload$Type<RegistrationPayload>, channels: Identifier[])
    // private channels: Identifier[];
    // private type: CustomPacketPayload$Type<RegistrationPayload>;
    channels(): Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): CustomPacketPayload$Type<RegistrationPayload>;
    // private write(arg0: FriendlyByteBuf): void;
}