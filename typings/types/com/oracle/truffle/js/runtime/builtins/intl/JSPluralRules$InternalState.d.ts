import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSNumberFormat$BasicInternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$BasicInternalState.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { LocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class JSPluralRules$InternalState extends JSNumberFormat$BasicInternalState {
    constructor()
    readonly compactDisplay: string;
    readonly notation: string;
    readonly numberFormatter: LocalizedNumberFormatter;
    readonly numberRangeFormatter: LocalizedNumberRangeFormatter;
    // private pluralCategories: TruffleString[];
    readonly pluralRules: PluralRules;
    readonly type: string;
    fillResolvedOptions(context: JSContext, realm: JSRealm, result: JSDynamicObject): void;
    getNumberFormatter(): LocalizedNumberFormatter;
    getNumberRangeFormatter(): LocalizedNumberRangeFormatter;
    getPluralRules(): PluralRules;
    initializeNumberFormatter(): void;
    initializePluralRules(): void;
    setCompactDisplay(compactDisplay: string): void;
    setNotation(notation: string): void;
    setType(type: string): void;
}