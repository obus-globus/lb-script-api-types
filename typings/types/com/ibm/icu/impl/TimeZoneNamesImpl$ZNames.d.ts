import type { TextTrieMap } from '../../../../com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeZoneNamesImpl$ZNames extends Object {
    static NUM_NAME_TYPES: number;
    static createMetaZoneAndPutInCache(paramarg0: { [key: string]: TimeZoneNamesImpl$ZNames }, paramarg1: string[], paramarg2: string): TimeZoneNamesImpl$ZNames;
    static createTimeZoneAndPutInCache(paramarg0: { [key: string]: TimeZoneNamesImpl$ZNames }, paramarg1: string[], paramarg2: string): TimeZoneNamesImpl$ZNames;
    constructor(arg0: string[])
    // private _names: string[];
    // private didAddIntoTrie: boolean;
    addAsMetaZoneIntoTrie(arg0: string, arg1: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    addAsTimeZoneIntoTrie(arg0: string, arg1: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    // private addNamesIntoTrie(arg0: string, arg1: string, arg2: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    getName(arg0: TimeZoneNames$NameType): string;
}