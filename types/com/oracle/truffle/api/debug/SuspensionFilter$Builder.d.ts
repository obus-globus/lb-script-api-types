import type { SuspensionFilter } from '../../../../../com/oracle/truffle/api/debug/SuspensionFilter.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SuspensionFilter$Builder extends Object {
    private constructor(null_: SuspensionFilter$Builder)
    // private ignoreLanguageContextInitialization: boolean;
    // private includeAvailableSourceSectionsOnly: boolean;
    // private includeInternal: boolean;
    // private sourcePredicate: (param0: Source) => kotlin.Boolean;
    build(): SuspensionFilter;
    ignoreLanguageContextInitialization(ignore: boolean): SuspensionFilter$Builder;
    includeInternal(internal: boolean): SuspensionFilter$Builder;
    sourceIs(filter: (param0: Source) => kotlin.Boolean): SuspensionFilter$Builder;
    sourceSectionAvailableOnly(availableOnly: boolean): SuspensionFilter$Builder;
}