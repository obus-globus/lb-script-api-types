import type { ICUResourceBundleReader } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$Container } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$Container.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Table } from '../../../../com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ICUResourceBundleReader$Table extends ICUResourceBundleReader$Container implements UResource$Table {
    constructor()
    // private key32Offsets: number[];
    // private keyOffsets: string[];
    findTableItem(arg0: ICUResourceBundleReader, arg1: CharSequence): number;
    findValue(arg0: CharSequence, arg1: UResource$Value): boolean;
    getKey(arg0: ICUResourceBundleReader, arg1: number): string;
    getKeyAndValue(arg0: number, arg1: UResource$Key, arg2: UResource$Value): boolean;
    getResource(arg0: ICUResourceBundleReader, arg1: string): number;
}