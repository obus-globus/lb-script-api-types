import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../../../../../kotlin/ranges/ClosedRange.d.ts'
import type { RangedValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ChoiceListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { MultiChoiceListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Value as Value_2 } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Object used by the script API to provide an idiomatic way of creating module values.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.kt:39}
 */
export class ScriptSetting extends Object {
    static INSTANCE: ScriptSetting;
    /**
     * Creates a boolean setting (rendered as a toggle / checkbox in the
     * ClickGUI). The value can be read via `.get()` at runtime.
     *
     * @param option.name Display name shown in the ClickGUI.
     * @param option.default Initial value if the user hasn't changed it.
     * @returns The setting handle. Call `.get()` to read the current value.
     *
     * @example
     * ```ts
     * const loud = mod.setting.boolean({ name: "Loud", default: false });
     * if (loud.get()) print("loud!");
     * ```
     *
     * Source: `ScriptSetting.kt:43` - `fun boolean(value: PolyglotValue)`,
     * reads the `name` and `default` members. Class-level KDoc states
     * "Object used by the script API to provide an idiomatic way of
     * creating module values."
     */
    boolean(option: { name: string; default: boolean }): Value<boolean>;
    choose<C extends readonly string[]>(option: { name: string; choices: C; default: C[number] }): ChoiceListValue<Tagged>;
    float(option: { name: string; default: number; range: [number, number]; suffix?: string }): RangedValue<number>;
    floatRange(option: { name: string; default: [number, number]; range: [number, number]; suffix?: string }): RangedValue<ClosedFloatingPointRange<number>>;
    int(option: { name: string; default: number; range: [number, number]; suffix?: string }): RangedValue<number>;
    intRange(option: { name: string; default: [number, number]; range: [number, number]; suffix?: string }): RangedValue<{ start: number; endInclusive: number; step: number }>;
    key(option: { name: string; default: string }): Value<InputConstants$Key>;
    multiChoose<C extends readonly string[]>(option: { name: string; choices: C; default?: ReadonlyArray<C[number]>; canBeNone?: boolean }): MultiChoiceListValue<Tagged>;
    // private rangedValue<T extends unknown>(name: string, default_: T, range: ClosedRange<any>, suffix: string, valueType: ValueType): RangedValue<T>;
    text(option: { name: string; default: string }): Value<string>;
    textArray(option: { name: string; default: string[] }): Value<string[]>;
    // private value<T extends unknown>(name: string, default_: T, valueType: ValueType): Value<T>;
}