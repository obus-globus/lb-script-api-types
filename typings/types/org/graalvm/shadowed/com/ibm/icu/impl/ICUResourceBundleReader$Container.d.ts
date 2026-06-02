import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundleReader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
export class ICUResourceBundleReader$Container extends Object {
    constructor()
    // private itemsOffset: number;
    size: number;
    getContainer16Resource(reader: ICUResourceBundleReader, index: number): number;
    getContainer32Resource(reader: ICUResourceBundleReader, index: number): number;
    getContainerResource(reader: ICUResourceBundleReader, index: number): number;
    getResource(reader: ICUResourceBundleReader, resKey: string): number;
    getSize(): number;
}