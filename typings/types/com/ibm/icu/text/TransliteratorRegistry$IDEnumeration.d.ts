import type { CaseInsensitiveString } from '../../../../com/ibm/icu/util/CaseInsensitiveString.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TransliteratorRegistry$IDEnumeration extends Object implements Enumeration<string> {
    constructor(arg0: Enumeration<CaseInsensitiveString>)
    // private en: Enumeration<CaseInsensitiveString>;
    asIterator(): Iterator<string>;
    hasMoreElements(): boolean;
    nextElement(): string;
}