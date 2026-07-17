import type { JavaMap } from '../../JavaMap.d.ts'
import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { TextStyle } from '../../java/time/format/TextStyle.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { ZoneRules } from '../../java/time/zone/ZoneRules.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ZoneId extends Object implements Serializable {
    static SHORT_IDS: JavaMap<string, string>;
    static from(paramarg0: TemporalAccessor): ZoneId;
    static getAvailableZoneIds(): string[];
    static of(paramarg0: string): ZoneId;
    static of(paramarg0: string, paramarg1: JavaMap<string, string>): ZoneId;
    static ofOffset(paramarg0: string, paramarg1: ZoneOffset): ZoneId;
    static systemDefault(): ZoneId;
    constructor()
    equals(arg0: Object | null): boolean;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    getId(): string;
    getOffset(arg0: number): ZoneOffset;
    getRules(): ZoneRules;
    hashCode(): number;
    normalized(): ZoneId;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private toTemporal(): TemporalAccessor;
    write(arg0: DataOutput): void;
    // private writeReplace(): Object;
}