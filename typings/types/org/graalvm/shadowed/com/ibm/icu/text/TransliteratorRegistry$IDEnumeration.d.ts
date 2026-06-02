import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { CaseInsensitiveString } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CaseInsensitiveString.d.ts'
export class TransliteratorRegistry$IDEnumeration extends Object implements Enumeration<string> {
    constructor(e: Enumeration<CaseInsensitiveString>)
    // private en: Enumeration<CaseInsensitiveString>;
    asIterator(): Iterator<E>;
    hasMoreElements(): boolean;
    nextElement(): string;
}