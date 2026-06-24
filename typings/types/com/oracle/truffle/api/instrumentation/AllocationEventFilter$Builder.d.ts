import type { AllocationEventFilter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AllocationEventFilter$Builder extends Object {
    constructor(null_: AllocationEventFilter)
    // private langs: LanguageInfo[];
    build(): AllocationEventFilter;
    languages(languages: LanguageInfo[]): AllocationEventFilter$Builder;
}