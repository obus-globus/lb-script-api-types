import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneGenericNames$GenericNameType } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneGenericNames$NameInfo } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$NameInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TimeZoneGenericNames$GenericNameSearchHandler extends Object implements TextTrieMap$ResultHandler<TimeZoneGenericNames$NameInfo> {
    constructor(arg0: TimeZoneGenericNames$GenericNameType[])
    // private _matches: E[];
    // private _maxMatchLen: number;
    // private _types: TimeZoneGenericNames$GenericNameType[];
    getMatches(): E[];
    getMaxMatchLen(): number;
    handlePrefixMatch(arg0: number, arg1: Iterator<TimeZoneGenericNames$NameInfo>): boolean;
    resetResults(): void;
}