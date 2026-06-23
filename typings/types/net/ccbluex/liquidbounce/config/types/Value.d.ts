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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:59}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:95}
     */
    readonly doNotInclude: () => boolean;
    /**
     * If true, the description won't be bound to any {@link net.ccbluex.liquidbounce.config.types.group.ValueGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:69}
     */
    independentDescription: boolean;
    // private inner: T;
    /*not mapped: */ getInner$liquidbounce(): T;
    // private isImmutable: boolean;
    /**
     * If true, value will always keep {@link inner} equals {@link defaultValue}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:113}
     */
    /*not mapped: */ isImmutable(): boolean;
    key: string | null;
    // private listeners: (param0: T) => Object | null[];
    /*not mapped: */ getLoweredName$liquidbounce(): string;
    readonly name: string;
    // private stateFlow: MutableStateFlow<T>;
    readonly valueType: ValueType;
    asStateFlow(): StateFlow<T>;
    /**
     * Deserialize value from JSON
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L288 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:288}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:144}
     */
    getValue(): Object;
    getValue(u: Object | null, property: KProperty<Object>): T;
    immutable(): Value<T>;
    /**
     * If true, value will not be included in generated RestAPI config
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:105}
     */
    notAnOption(): Value<T>;
    onChange(listener: (param0: T) => Object | null): Value<T>;
    onChanged(listener: (param0: T) => void): Value<T>;
    /**
     * Restore value to default value
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L251 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:251}
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