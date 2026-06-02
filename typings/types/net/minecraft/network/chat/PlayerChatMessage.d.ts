import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { FilterMask } from '../../../../net/minecraft/network/chat/FilterMask.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
import type { SignedMessageLink } from '../../../../net/minecraft/network/chat/SignedMessageLink.d.ts'
import type { SignatureUpdater$Output } from '../../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
import type { SignatureValidator } from '../../../../net/minecraft/util/SignatureValidator.d.ts'
export class PlayerChatMessage extends Record {
    static MAP_CODEC: MapCodec<PlayerChatMessage>;
    static MESSAGE_EXPIRES_AFTER_CLIENT: Duration;
    static MESSAGE_EXPIRES_AFTER_SERVER: Duration;
    static describeSigned(parammessage: PlayerChatMessage): string;
    static system(paramcontent: string): PlayerChatMessage;
    static unsigned(paramsender: UUID, paramcontent: string): PlayerChatMessage;
    static updateSignature(paramoutput: (param0: number[]) => void, paramlink: SignedMessageLink, parambody: SignedMessageBody): void;
    constructor(link: SignedMessageLink, signature: MessageSignature, signedBody: SignedMessageBody, unsignedContent: Component, filterMask: FilterMask)
    // private filterMask: FilterMask;
    // private link: SignedMessageLink;
    // private signature: MessageSignature;
    // private signedBody: SignedMessageBody;
    // private unsignedContent: Component;
    decoratedContent(): Component;
    equals(o: Object | null): boolean;
    filter(filtered: boolean): PlayerChatMessage;
    filter(filterMask: FilterMask): PlayerChatMessage;
    filterMask(): FilterMask;
    hasExpiredClient(now: Instant): boolean;
    hasExpiredServer(now: Instant): boolean;
    hasSignature(): boolean;
    hasSignatureFrom(profileId: UUID): boolean;
    hashCode(): number;
    isFullyFiltered(): boolean;
    isSystem(): boolean;
    link(): SignedMessageLink;
    removeSignature(): PlayerChatMessage;
    removeUnsignedContent(): PlayerChatMessage;
    salt(): number;
    sender(): UUID;
    signature(): MessageSignature;
    signedBody(): SignedMessageBody;
    signedContent(): string;
    timeStamp(): Instant;
    toString(): string;
    unsignedContent(): Component;
    verify(signatureValidator: SignatureValidator): boolean;
    withUnsignedContent(content: Component): PlayerChatMessage;
}