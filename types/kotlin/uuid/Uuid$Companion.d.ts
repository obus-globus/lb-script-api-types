import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
export class Uuid$Companion extends Object {
    readonly LEXICAL_ORDER: (param0: Uuid) => kotlin.Boolean;
    readonly NIL: Uuid;
    SIZE_BITS: number;
    SIZE_BYTES: number;
    fromByteArray(byteArray: number[]): Uuid;
    fromLongs(mostSignificantBits: number, leastSignificantBits: number): Uuid;
    fromUByteArray(ubyteArray: (Object | null)[]): Uuid;
    fromULongs(mostSignificantBits: ULong, leastSignificantBits: ULong): Uuid;
    generateV4(): Uuid;
    generateV7(): Uuid;
    generateV7(clock: Clock): Uuid;
    generateV7NonMonotonicAt(timestamp: Instant): Uuid;
    parse(uuidString: string): Uuid;
    parseHex(hexString: string): Uuid;
    parseHexDash(hexDashString: string): Uuid;
    parseHexDashOrNull(hexDashString: string): Uuid | null;
    parseHexOrNull(hexString: string): Uuid | null;
    parseOrNull(uuidString: string): Uuid | null;
    random(): Uuid;
}