import type { ClassSetContents } from '../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { UnicodeProperties$NameMatchingMode } from '../../../../../com/oracle/truffle/regex/charset/UnicodeProperties$NameMatchingMode.d.ts'
import type { UnicodePropertyData } from '../../../../../com/oracle/truffle/regex/charset/UnicodePropertyData.d.ts'
import type { UnicodePropertyDataDiff$CodePointSetDiff } from '../../../../../com/oracle/truffle/regex/charset/UnicodePropertyDataDiff$CodePointSetDiff.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class UnicodePropertyDataDiff extends UnicodePropertyData {
    constructor(parent: UnicodePropertyData, properties: EconomicMap<string, UnicodePropertyDataDiff$CodePointSetDiff>, emoji: EconomicMap<string, ClassSetContents>, propAliases: EconomicMap<string, string>, gcAliases: EconomicMap<string, string>, scAliases: EconomicMap<string, string>, blkAliases: EconomicMap<string, string>)
    // private parent: UnicodePropertyData;
    // private properties: EconomicMap<string, UnicodePropertyDataDiff$CodePointSetDiff>;
    lookupBlockAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupGeneralCategoryAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupPropertyAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupScriptAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    retrieveProperty(propertySpec: string): (Object | null)[];
    retrievePropertyOfStrings(propertySpec: string): ClassSetContents;
}