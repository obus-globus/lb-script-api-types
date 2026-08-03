import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { MutableStateFlow } from '../../../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { StateFlow } from '../../../../../kotlinx/coroutines/flow/StateFlow.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { Value as Value_2 } from '../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Value based on generics and support for readable names and descriptions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:63}
 */
export class Value<T extends unknown> extends Object {
    constructor(name: string, aliases: string[], defaultValue: T, valueType: ValueType, independentDescription: boolean)
    readonly aliases: string[];
    // private changedListeners: (param0: T) => void[];
    // private defaultValue: T;
    description: () => string | null;
    descriptionKey: string | null;
    /**
     * If true, value will not be included in generated public config
     *
     * @see 
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:101}
     */
    readonly doNotInclude: () => boolean;
    /**
     * If true, the description won't be bound to any {@link net.ccbluex.liquidbounce.config.types.group.ValueGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:73}
     */
    independentDescription: boolean;
    getIndependentDescription(): boolean;
    setIndependentDescription(value: boolean): void;
    // private inner: T;
    /*not mapped: */ getInner$net_ccbluex_liquidbounce(): T;
    // private isImmutable: boolean;
    /**
     * If true, value will always keep {@link inner} equals {@link defaultValue}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:117}
     */
    /*not mapped: */ isImmutable(): boolean;
    key: string | null;
    // private listeners: (param0: T) => T[];
    /*not mapped: */ getLoweredName$net_ccbluex_liquidbounce(): string;
    readonly name: string;
    getNotAnOption(): boolean;
    // private stateFlow: MutableStateFlow<T>;
    readonly valueType: ValueType;
    asStateFlow(): StateFlow<T>;
    /**
     * Deserialize value from JSON
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L292 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:292}
     */
    deserializeFrom(gson: Gson, element: JsonElement): void;
    doNotIncludeAlways(): Value<T>;
    doNotIncludeWhen(condition: () => boolean): Value<T>;
    get(): T;
    getTagValue(): Object;
    /**
     * Support for delegated properties
     * example:
     *  var autoaim by boolean(name = "autoaim", default = true)
     *  if(!autoaim)
     *    autoaim = true
     *
     * Important: To use values a class has to be configurable
     *
     * @docs https://kotlinlang.org/docs/reference/delegated-properties.html
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:157}
     */
    getValue(): Object;
    getValue(u: Object | null, property: KProperty<Object>): T;
    immutable(): Value<T>;
    /**
     * If true, value will not be included in generated RestAPI config
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:109}
     */
    notAnOption(): Value<T>;
    onChange(listener: (param0: T) => T): Value<T>;
    onChanged(listener: (param0: T) => void): Value<T>;
    /**
     * Restore value to default value
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L255 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:255}
     */
    restore(): void;
    set(t: T): void;
    set(t: T, apply: (param0: T) => void): void;
    setByString(string: string): void;
    setValue(u: Object | null, property: KProperty<Object>, t: T): void;
    setValue(t: Value_2): Result<void>;
    toString(): string;
    type(): ValueType;
}