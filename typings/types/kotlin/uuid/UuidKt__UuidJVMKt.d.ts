import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { UUID } from '../../java/util/UUID.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
export class UuidKt__UuidJVMKt extends Object {
    static formatBytesInto(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static getLongAt(paramarg0: number[], paramarg1: number): number;
    static getUuid(paramarg0: ByteBuffer): Uuid;
    static getUuid(paramarg0: ByteBuffer, paramarg1: number): Uuid;
    static putUuid(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Uuid): ByteBuffer;
    static putUuid(paramarg0: ByteBuffer, paramarg1: Uuid): ByteBuffer;
    static reverseBytes(paramarg0: number): number;
    static secureRandomBytes(paramarg0: number[]): void;
    static serializedUuid(paramarg0: Uuid): Object;
    static setLongAt(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static toJavaUuid(paramarg0: Uuid): UUID;
    static toKotlinUuid(paramarg0: UUID): Uuid;
    static uuidParseHex(paramarg0: string): Uuid;
    static uuidParseHexDash(paramarg0: string): Uuid;
    static uuidParseHexDashOrNull(paramarg0: string): Uuid;
    static uuidParseHexOrNull(paramarg0: string): Uuid;
}