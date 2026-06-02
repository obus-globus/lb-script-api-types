import type { ClassSetContents } from '../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { UnicodeProperties$NameMatchingMode } from '../../../../../com/oracle/truffle/regex/charset/UnicodeProperties$NameMatchingMode.d.ts'
import type { UnicodePropertyData$Aliases } from '../../../../../com/oracle/truffle/regex/charset/UnicodePropertyData$Aliases.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class UnicodePropertyData extends Object {
    constructor(properties: EconomicMap<string, (Object | null)[]>, emoji: EconomicMap<string, ClassSetContents>, propAliases: EconomicMap<string, string>, gcAliases: EconomicMap<string, string>, scAliases: EconomicMap<string, string>, blkAliases: EconomicMap<string, string>)
    // private aliases: UnicodePropertyData$Aliases[];
    // private emoji: EconomicMap<string, ClassSetContents>;
    // private properties: EconomicMap<string, (Object | null)[]>;
    // private rgiEmoji: ClassSetContents;
    getAliases(nameMatchingMode: UnicodeProperties$NameMatchingMode): UnicodePropertyData$Aliases;
    getExactAliases(): UnicodePropertyData$Aliases;
    getRGIEmoji(): ClassSetContents;
    lookupBlockAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupGeneralCategoryAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupPropertyAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    lookupScriptAlias(alias: string, nameMatchingMode: UnicodeProperties$NameMatchingMode): string;
    retrieveEmojiProperty(propertySpec: string): ClassSetContents;
    retrieveProperty(propertySpec: string): (Object | null)[];
    retrievePropertyOfStrings(propertySpec: string): ClassSetContents;
}