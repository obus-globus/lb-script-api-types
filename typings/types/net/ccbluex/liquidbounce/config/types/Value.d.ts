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
import type { OptionalInclusion } from '../../../../../net/ccbluex/liquidbounce/config/OptionalInclusion.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { Value as Value_2 } from '../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Value based on generics and support for readable names and descriptions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:65}
 */
export class Value<T extends unknown> extends Object {
    constructor(name: string, aliases: string[], defaultValue: T, valueType: ValueType, independentDescription: boolean)
    readonly aliases: string[];
    // private changedListeners: (param0: T) => void[];
    // private defaultValue: T;
    description: () => string | null;
    descriptionKey: string | null;
    /**
     * If true, value will not be included in generated public config.
     * Can be set using {@link doNotIncludeWhen} or {@link doNotIncludeAlways}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:102}
     */
    readonly doNotInclude: () => boolean;
    getInclusionGroup(): OptionalInclusion | null;
    /**
     * If true, the description won't be bound to any {@link net.ccbluex.liquidbounce.config.types.group.ValueGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:75}
     */
    independentDescription: boolean;
    getIndependentDescription(): boolean;
    setIndependentDescription(value: boolean): void;
    // private inner: T;
    /*not mapped: */ getInner$net_ccbluex_liquidbounce(): T;
    // private isImmutable: boolean;
    /**
     * If true, value will always keep {@link inner} equals {@link defaultValue}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:127}
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
     * Checks if this value should be included in the public configuration based on
     * its {@link doNotInclude} condition and {@link inclusionGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:136}
     */
    checkIfInclude(): boolean;
    /**
     * Deserialize value from JSON
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L321 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:321}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L182 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:182}
     */
    getValue(): Object;
    getValue(u: Object | null, property: KProperty<Object>): T;
    immutable(): Value<T>;
    /**
     * Group for optional inclusion during configuration saving.
     * Managed by {@link AutoConfig}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:111}
     */
    inclusionGroup(group: OptionalInclusion): Value<T>;
    /**
     * If true, value will not be included in generated RestAPI config.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:119}
     */
    notAnOption(): Value<T>;
    onChange(listener: (param0: T) => T): Value<T>;
    onChanged(listener: (param0: T) => void): Value<T>;
    /**
     * Restore value to default value
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L280 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:280}
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