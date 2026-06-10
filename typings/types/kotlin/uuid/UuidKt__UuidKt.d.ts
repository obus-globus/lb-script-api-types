import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { UUID } from '../../java/util/UUID.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
import type { UuidKt__UuidJVMKt } from '../../kotlin/uuid/UuidKt__UuidJVMKt.d.ts'
export class UuidKt__UuidKt extends UuidKt__UuidJVMKt {
    static formatBytesInto(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static formatBytesIntoCommonImpl(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static getLongAt(paramarg0: number[], paramarg1: number): number;
    static getLongAtCommonImpl(paramarg0: number[], paramarg1: number): number;
    static getUuid(paramarg0: ByteBuffer): Uuid;
    static getUuid(paramarg0: ByteBuffer, paramarg1: number): Uuid;
    static putUuid(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Uuid): ByteBuffer;
    static putUuid(paramarg0: ByteBuffer, paramarg1: Uuid): ByteBuffer;
    static reverseBytes(paramarg0: number): number;
    static secureRandomBytes(paramarg0: number[]): void;
    static secureRandomUuid(): Uuid;
    static serializedUuid(paramarg0: Uuid): Object;
    static setLongAt(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static setLongAtCommonImpl(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static toJavaUuid(paramarg0: Uuid): UUID;
    static toKotlinUuid(paramarg0: UUID): Uuid;
    static uuidCheckHyphenAt(paramarg0: string, paramarg1: number, paramarg2: (param0: Object, param1: Object, param2: Object) => void): void;
    static uuidFromRandomBytes(paramarg0: number[]): Uuid;
    static uuidParseHex(paramarg0: string): Uuid;
    static uuidParseHexCommonImpl(paramarg0: string): Uuid;
    static uuidParseHexCommonImpl(paramarg0: string, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Uuid;
    static uuidParseHexDash(paramarg0: string): Uuid;
    static uuidParseHexDashCommonImpl(paramarg0: string): Uuid;
    static uuidParseHexDashCommonImpl(paramarg0: string, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Uuid;
    static uuidParseHexDashOrNull(paramarg0: string): Uuid;
    static uuidParseHexDashOrNullCommonImpl(paramarg0: string): Uuid;
    static uuidParseHexOrNull(paramarg0: string): Uuid;
    static uuidParseHexOrNullCommonImpl(paramarg0: string): Uuid;
    static uuidThrowUnexpectedCharacterException(paramarg0: string, paramarg1: string, paramarg2: number): void;
}