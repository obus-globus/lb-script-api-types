import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSNumberFormat$BasicInternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$BasicInternalState.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { LocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
export class JSNumberFormat$InternalState extends JSNumberFormat$BasicInternalState {
    constructor()
    boundFormatFunction: JSDynamicObject;
    readonly compactDisplay: string;
    readonly currency: string;
    readonly currencyDisplay: string;
    readonly currencySign: string;
    // private negativeNumberFormatter: LocalizedNumberFormatter;
    readonly notation: string;
    // private numberRangeFormatter: LocalizedNumberRangeFormatter[];
    // private positiveNumberFormatter: LocalizedNumberFormatter;
    readonly signDisplay: string;
    readonly style: string;
    readonly unit: string;
    readonly unitDisplay: string;
    // private useGrouping: Object;
    fillResolvedOptions(context: JSContext, realm: JSRealm, result: JSDynamicObject): void;
    getBoundFormatFunction(): JSDynamicObject;
    getCurrency(): string;
    getNumberFormatter(forNegativeNumbers: boolean): LocalizedNumberFormatter;
    getNumberRangeFormatter(firstNegative: boolean, secondNegative: boolean): LocalizedNumberRangeFormatter;
    getStyle(): string;
    initializeNumberFormatter(): void;
    setBoundFormatFunction(boundFormatFunction: JSDynamicObject): void;
    setCompactDisplay(compactDisplay: string): void;
    setCurrency(currency: string): void;
    setCurrencyDisplay(currencyDisplay: string): void;
    setCurrencySign(currencySign: string): void;
    setGroupingUsed(useGrouping: Object): void;
    setNotation(notation: string): void;
    setSignDisplay(signDisplay: string): void;
    setStyle(style: string): void;
    setUnit(unit: string): void;
    setUnitDisplay(unitDisplay: string): void;
}