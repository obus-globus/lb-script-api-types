import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TZDBTimeZoneNames$TZDBNameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TZDBTimeZoneNames$TZDBNameInfo.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
export class TZDBTimeZoneNames$TZDBNameSearchHandler extends Object implements TextTrieMap$ResultHandler<TZDBTimeZoneNames$TZDBNameInfo> {
    constructor(nameTypes: TimeZoneNames$NameType[], region: string)
    // private _matches: E[];
    // private _nameTypes: TimeZoneNames$NameType[];
    // private _region: string;
    getMatches(): E[];
    handlePrefixMatch(matchLength: number, values: Iterator<TZDBTimeZoneNames$TZDBNameInfo>): boolean;
}