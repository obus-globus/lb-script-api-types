import type { UnicodeProperties$NameMatchingMode } from '../../../../../com/oracle/truffle/regex/charset/UnicodeProperties$NameMatchingMode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class UnicodePropertyData$Aliases extends Record {
    private constructor(prop: EconomicMap<string, string>, gc: EconomicMap<string, string>, sc: EconomicMap<string, string>, blk: EconomicMap<string, string>)
    // private blk: EconomicMap<string, string>;
    // private gc: EconomicMap<string, string>;
    // private prop: EconomicMap<string, string>;
    // private sc: EconomicMap<string, string>;
    blk(): EconomicMap<string, string>;
    equals(o: Object | null): boolean;
    gc(): EconomicMap<string, string>;
    hashCode(): number;
    prop(): EconomicMap<string, string>;
    sc(): EconomicMap<string, string>;
    toString(): string;
    // private transform(nameMatchingMode: UnicodeProperties$NameMatchingMode): UnicodePropertyData$Aliases;
}