import type { ICUResourceBundleReader } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUResourceBundleReader$Container extends Object {
    constructor()
    // private itemsOffset: number;
    size: number;
    getContainer16Resource(arg0: ICUResourceBundleReader, arg1: number): number;
    getContainer32Resource(arg0: ICUResourceBundleReader, arg1: number): number;
    getContainerResource(arg0: ICUResourceBundleReader, arg1: number): number;
    getResource(arg0: ICUResourceBundleReader, arg1: string): number;
    getSize(): number;
}