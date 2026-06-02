import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSNumberFormat$BasicInternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$BasicInternalState.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { RelativeDateTimeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter.d.ts'
export class JSRelativeTimeFormat$InternalState extends JSNumberFormat$BasicInternalState {
    constructor()
    readonly numeric: string;
    readonly relativeDateTimeFormatter: RelativeDateTimeFormatter;
    readonly style: string;
    fillResolvedOptions(context: JSContext, realm: JSRealm, result: JSDynamicObject): void;
    getNumeric(): string;
    getRelativeDateTimeFormatter(): RelativeDateTimeFormatter;
    initializeRelativeTimeFormatter(): void;
    setNumeric(numeric: string): void;
    setStyle(style: string): void;
}