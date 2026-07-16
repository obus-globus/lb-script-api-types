import type { LocalePriorityList$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocalePriorityList$Builder.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocalePriorityList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static add(paramacceptLanguageString: string): LocalePriorityList$Builder;
    static add(paramlist: ULocale[]): LocalePriorityList$Builder;
    static add(paramlocale: ULocale, paramweight: number): LocalePriorityList$Builder;
    static add(...paramlocales: ULocale[]): LocalePriorityList$Builder;
}