import type { SuspensionFilter$Builder } from '../../../../../com/oracle/truffle/api/debug/SuspensionFilter$Builder.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SuspensionFilter extends Object {
    static newBuilder(): SuspensionFilter$Builder;
    private constructor()
    private constructor(ignoreLanguageContextInitialization: boolean, includeInternal: boolean, includeAvailableSourceSectionsOnly: boolean, sourcePredicate: (param0: Source) => kotlin.Boolean)
    readonly ignoreLanguageContextInitialization: boolean;
    // private includeAvailableSourceSectionsOnly: boolean;
    // private includeInternal: boolean;
    // private sourcePredicate: (param0: Source) => kotlin.Boolean;
    getSourcePredicate(): (param0: Source) => kotlin.Boolean;
    isIgnoreLanguageContextInitialization(): boolean;
    isIncludeAvailableSourceSectionsOnly(): boolean;
    isInternalIncluded(): boolean;
}