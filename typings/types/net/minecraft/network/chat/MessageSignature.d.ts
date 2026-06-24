import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { MessageSignature$Packed } from '../../../../net/minecraft/network/chat/MessageSignature$Packed.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
import type { SignatureUpdater } from '../../../../net/minecraft/util/SignatureUpdater.d.ts'
import type { SignatureUpdater$Output } from '../../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
import type { SignatureValidator } from '../../../../net/minecraft/util/SignatureValidator.d.ts'
export class MessageSignature extends Record {
    static BYTES: number;
    static CODEC: Codec<MessageSignature>;
    static describe(paramsignature: MessageSignature): string;
    static read(paraminput: FriendlyByteBuf): MessageSignature;
    static write(paramoutput: FriendlyByteBuf, paramsignature: MessageSignature): void;
    constructor(bytes: number[])
    // private bytes: number[];
    asByteBuffer(): ByteBuffer;
    bytes(): number[];
    checksum(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pack(cache: MessageSignatureCache): MessageSignature$Packed;
    toString(): string;
    verify(signature: SignatureValidator, updater: (param0: (param0: number[]) => void) => void): boolean;
}