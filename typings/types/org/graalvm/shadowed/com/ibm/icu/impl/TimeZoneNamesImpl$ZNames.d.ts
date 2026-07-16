import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TextTrieMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
export class TimeZoneNamesImpl$ZNames extends Object {
    static NUM_NAME_TYPES: number;
    static createMetaZoneAndPutInCache(paramcache: { [key: string]: TimeZoneNamesImpl$ZNames }, paramnames: string[], parammzID: string): TimeZoneNamesImpl$ZNames;
    static createTimeZoneAndPutInCache(paramcache: { [key: string]: TimeZoneNamesImpl$ZNames }, paramnames: string[], paramtzID: string): TimeZoneNamesImpl$ZNames;
    constructor(names: string[])
    // private _names: string[];
    // private didAddIntoTrie: boolean;
    addAsMetaZoneIntoTrie(mzID: string, trie: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    addAsTimeZoneIntoTrie(tzID: string, trie: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    // private addNamesIntoTrie(mzID: string, tzID: string, trie: TextTrieMap<TimeZoneNamesImpl$NameInfo>): void;
    getName(type: TimeZoneNames$NameType): string;
}