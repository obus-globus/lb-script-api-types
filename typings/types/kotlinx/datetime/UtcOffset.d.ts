import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { UtcOffset$Companion } from '../../kotlinx/datetime/UtcOffset$Companion.d.ts'
export class UtcOffset extends Object implements Serializable {
    static Companion: UtcOffset$Companion;
    constructor(zoneOffset: ZoneOffset)
    readonly totalSeconds: number;
    // private zoneOffset: ZoneOffset;
    /*not mapped: */ getZoneOffset$kotlinx_datetime(): ZoneOffset;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private readObject(ois: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}