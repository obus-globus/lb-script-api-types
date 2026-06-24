import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReportChatMessage extends Record {
    constructor(index: number, profileId: UUID, sessionId: UUID, timestamp: Instant, salt: number, lastSeen: ByteBuffer[], message: string, signature: ByteBuffer, messageReported: boolean)
    // private index: number;
    // private lastSeen: ByteBuffer[];
    // private message: string;
    // private messageReported: boolean;
    // private profileId: UUID;
    // private salt: number;
    // private sessionId: UUID;
    // private signature: ByteBuffer;
    // private timestamp: Instant;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    index(): number;
    lastSeen(): ByteBuffer[];
    message(): string;
    messageReported(): boolean;
    profileId(): UUID;
    salt(): number;
    sessionId(): UUID;
    signature(): ByteBuffer;
    timestamp(): Instant;
    toString(): string;
}