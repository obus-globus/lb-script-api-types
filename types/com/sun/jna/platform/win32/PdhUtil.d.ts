import type { PdhUtil$PdhEnumObjectItems } from '../../../../../com/sun/jna/platform/win32/PdhUtil$PdhEnumObjectItems.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class PdhUtil extends Object {
    static PdhEnumObjectItems(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: number): PdhUtil$PdhEnumObjectItems;
    static PdhLookupPerfIndexByEnglishName(paramarg0: string): number;
    static PdhLookupPerfNameByIndex(paramarg0: string, paramarg1: number): string;
    constructor()
}