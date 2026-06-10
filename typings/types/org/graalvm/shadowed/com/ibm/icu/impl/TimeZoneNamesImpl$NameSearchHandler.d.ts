import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
export class TimeZoneNamesImpl$NameSearchHandler extends Object implements TextTrieMap$ResultHandler<TimeZoneNamesImpl$NameInfo> {
    constructor(nameTypes: TimeZoneNames$NameType[])
    // private _matches: TimeZoneNames$MatchInfo[];
    // private _maxMatchLen: number;
    // private _nameTypes: TimeZoneNames$NameType[];
    getMatches(): TimeZoneNames$MatchInfo[];
    getMaxMatchLen(): number;
    handlePrefixMatch(matchLength: number, values: Iterator<TimeZoneNamesImpl$NameInfo>): boolean;
    resetResults(): void;
}