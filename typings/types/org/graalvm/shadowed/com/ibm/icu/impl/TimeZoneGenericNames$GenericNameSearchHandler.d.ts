import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneGenericNames$GenericNameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneGenericNames$NameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$NameInfo.d.ts'
export class TimeZoneGenericNames$GenericNameSearchHandler extends Object implements TextTrieMap$ResultHandler<TimeZoneGenericNames$NameInfo> {
    constructor(types: TimeZoneGenericNames$GenericNameType[])
    // private _matches: E[];
    // private _maxMatchLen: number;
    // private _types: TimeZoneGenericNames$GenericNameType[];
    getMatches(): E[];
    getMaxMatchLen(): number;
    handlePrefixMatch(matchLength: number, values: Iterator<TimeZoneGenericNames$NameInfo>): boolean;
    resetResults(): void;
}