import type { LocalePriorityList$Builder } from '../../../../com/ibm/icu/util/LocalePriorityList$Builder.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class LocalePriorityList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static add(paramarg0: ULocale[]): LocalePriorityList$Builder;
    static add(paramarg0: ULocale, paramarg1: number): LocalePriorityList$Builder;
    static add(...paramarg0: ULocale[]): LocalePriorityList$Builder;
    static add(paramarg0: string): LocalePriorityList$Builder;
}