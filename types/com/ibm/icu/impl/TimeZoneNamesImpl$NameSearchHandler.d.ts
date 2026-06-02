import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TimeZoneNamesImpl$NameSearchHandler extends Object implements TextTrieMap$ResultHandler<TimeZoneNamesImpl$NameInfo> {
    constructor(arg0: TimeZoneNames$NameType[])
    // private _matches: E[];
    // private _maxMatchLen: number;
    // private _nameTypes: TimeZoneNames$NameType[];
    getMatches(): E[];
    getMaxMatchLen(): number;
    handlePrefixMatch(arg0: number, arg1: Iterator<TimeZoneNamesImpl$NameInfo>): boolean;
    resetResults(): void;
}