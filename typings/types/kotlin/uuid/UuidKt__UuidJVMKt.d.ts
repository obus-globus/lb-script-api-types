import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { UUID } from '../../java/util/UUID.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
export class UuidKt__UuidJVMKt extends Object {
    static formatBytesInto(self: number, dst: number[], dstOffset: number, startIndex: number, endIndex: number): void;
    static getLongAt(self: number[], index: number): number;
    static getUuid(self: ByteBuffer): Uuid;
    static getUuid(self: ByteBuffer, index: number): Uuid;
    static putUuid(self: ByteBuffer, index: number, uuid: Uuid): ByteBuffer;
    static putUuid(self: ByteBuffer, uuid: Uuid): ByteBuffer;
    static reverseBytes(self: number): number;
    static secureRandomBytes(destination: number[]): void;
    static serializedUuid(uuid: Uuid): Object;
    static setLongAt(self: number[], index: number, value: number): void;
    static toJavaUuid(self: Uuid): UUID;
    static toKotlinUuid(self: UUID): Uuid;
    static uuidParseHex(hexString: string): Uuid;
    static uuidParseHexDash(hexDashString: string): Uuid;
    static uuidParseHexDashOrNull(hexDashString: string): Uuid | null;
    static uuidParseHexOrNull(hexString: string): Uuid | null;
}