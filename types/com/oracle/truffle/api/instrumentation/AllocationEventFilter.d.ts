import type { AllocationEventFilter$Builder } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter$Builder.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AllocationEventFilter extends Object {
    static ANY: AllocationEventFilter;
    static newBuilder(): AllocationEventFilter$Builder;
    constructor(languages: LanguageInfo[])
    // private languageSet: LanguageInfo[];
    contains(li: LanguageInfo): boolean;
}