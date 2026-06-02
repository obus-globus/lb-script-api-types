import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ICUResourceBundleReader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$Container } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$Container.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Table } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class ICUResourceBundleReader$Table extends ICUResourceBundleReader$Container implements UResource$Table {
    constructor()
    // private key32Offsets: number[];
    // private keyOffsets: string[];
    findTableItem(reader: ICUResourceBundleReader, key: CharSequence): number;
    findValue(key: CharSequence, value: UResource$Value): boolean;
    getKey(reader: ICUResourceBundleReader, index: number): string;
    getKeyAndValue(i: number, key: UResource$Key, value: UResource$Value): boolean;
    getResource(reader: ICUResourceBundleReader, resKey: string): number;
}