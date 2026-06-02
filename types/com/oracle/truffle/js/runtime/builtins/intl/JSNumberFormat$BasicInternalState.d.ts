import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractInternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/AbstractInternalState.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
export abstract class JSNumberFormat$BasicInternalState extends AbstractInternalState {
    constructor()
    readonly maximumFractionDigits: number;
    readonly maximumSignificantDigits: number;
    readonly minimumFractionDigits: number;
    readonly minimumIntegerDigits: number;
    readonly minimumSignificantDigits: number;
    readonly roundingIncrement: number;
    readonly roundingMode: string;
    readonly roundingType: string;
    readonly trailingZeroDisplay: string;
    readonly unlocalizedFormatter: UnlocalizedNumberFormatter;
    fillBasicResolvedOptions(result: JSDynamicObject): void;
    fillResolvedOptions(context: JSContext, realm: JSRealm, result: JSDynamicObject): void;
    fillRoundingResolvedOptions(result: JSDynamicObject): void;
    getJavaLocale(): Locale;
    getLocale(): string;
    getMaximumFractionDigits(): number;
    getMaximumSignificantDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumIntegerDigits(): number;
    getMinimumSignificantDigits(): number;
    getNumberingSystem(): string;
    getRoundingMode(): string;
    getRoundingType(): string;
    getUnlocalizedFormatter(): UnlocalizedNumberFormatter;
    initializeNumberFormatter(): void;
    setMaximumFractionDigits(maximumFractionDigits: number): void;
    setMaximumSignificantDigits(maximumSignificantDigits: number): void;
    setMinimumFractionDigits(minimumFractionDigits: number): void;
    setMinimumIntegerDigits(minimumIntegerDigits: number): void;
    setMinimumSignificantDigits(minimumSignificantDigits: number): void;
    setRoundingIncrement(roundingIncrement: number): void;
    setRoundingMode(roundingMode: string): void;
    setRoundingType(roundingType: string): void;
    setTrailingZeroDisplay(trailingZeroDisplay: string): void;
    toResolvedOptionsObject(context: JSContext, realm: JSRealm): JSObject;
}