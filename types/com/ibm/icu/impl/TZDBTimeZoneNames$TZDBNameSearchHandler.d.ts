import type { TZDBTimeZoneNames$TZDBNameInfo } from '../../../../com/ibm/icu/impl/TZDBTimeZoneNames$TZDBNameInfo.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TZDBTimeZoneNames$TZDBNameSearchHandler extends Object implements TextTrieMap$ResultHandler<TZDBTimeZoneNames$TZDBNameInfo> {
    constructor(arg0: TimeZoneNames$NameType[], arg1: string)
    // private _matches: E[];
    // private _nameTypes: TimeZoneNames$NameType[];
    // private _region: string;
    getMatches(): E[];
    handlePrefixMatch(arg0: number, arg1: Iterator<TZDBTimeZoneNames$TZDBNameInfo>): boolean;
}