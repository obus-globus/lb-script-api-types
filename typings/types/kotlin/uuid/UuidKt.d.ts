import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { UUID } from '../../java/util/UUID.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
import type { UuidKt__UuidKt } from '../../kotlin/uuid/UuidKt__UuidKt.d.ts'
export class UuidKt extends UuidKt__UuidKt {
    static formatBytesInto(self: number, dst: number[], dstOffset: number, startIndex: number, endIndex: number): void;
    static formatBytesIntoCommonImpl(self: number, dst: number[], dstOffset: number, startIndex: number, endIndex: number): void;
    static getLongAt(self: number[], index: number): number;
    static getLongAtCommonImpl(self: number[], index: number): number;
    static getUuid(self: ByteBuffer): Uuid;
    static getUuid(self: ByteBuffer, index: number): Uuid;
    static putUuid(self: ByteBuffer, index: number, uuid: Uuid): ByteBuffer;
    static putUuid(self: ByteBuffer, uuid: Uuid): ByteBuffer;
    static reverseBytes(self: number): number;
    static secureRandomBytes(destination: number[]): void;
    static secureRandomUuid(): Uuid;
    static serializedUuid(uuid: Uuid): Object;
    static setLongAt(self: number[], index: number, value: number): void;
    static setLongAtCommonImpl(self: number[], index: number, value: number): void;
    static toJavaUuid(self: Uuid): UUID;
    static toKotlinUuid(self: UUID): Uuid;
    static uuidCheckHyphenAt(self: string, index: number, onError: (param0: string, param1: string, param2: number) => void): void;
    static uuidFromRandomBytes(randomBytes: number[]): Uuid;
    static uuidParseHex(hexString: string): Uuid;
    static uuidParseHexCommonImpl(hexString: string): Uuid;
    static uuidParseHexCommonImpl(hexString: string, onError: (param0: string, param1: string, param2: number) => void): Uuid;
    static uuidParseHexDash(hexDashString: string): Uuid;
    static uuidParseHexDashCommonImpl(hexDashString: string): Uuid;
    static uuidParseHexDashCommonImpl(hexDashString: string, onError: (param0: string, param1: string, param2: number) => void): Uuid;
    static uuidParseHexDashOrNull(hexDashString: string): Uuid | null;
    static uuidParseHexDashOrNullCommonImpl(hexDashString: string): Uuid | null;
    static uuidParseHexOrNull(hexString: string): Uuid | null;
    static uuidParseHexOrNullCommonImpl(hexString: string): Uuid | null;
    static uuidThrowUnexpectedCharacterException(inputString: string, errorDescription: string, errorIndex: number): void;
}