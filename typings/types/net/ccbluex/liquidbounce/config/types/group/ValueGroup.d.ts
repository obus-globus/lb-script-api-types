import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../../../../../kotlin/ranges/ClosedRange.d.ts'
import type { Sequence } from '../../../../../../kotlin/sequences/Sequence.d.ts'
import type { Regex } from '../../../../../../kotlin/text/Regex.d.ts'
import type { BindValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/BindValue.d.ts'
import type { CurveValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { CurveValue$Axis } from '../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Axis.d.ts'
import type { CurveValue$Builder } from '../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Builder.d.ts'
import type { FileDialogMode } from '../../../../../../net/ccbluex/liquidbounce/config/types/FileDialogMode.d.ts'
import type { FileValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { RangedValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ChoiceListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { ItemListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ItemListValue.d.ts'
import type { ItemListValue$NamedItem } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ItemListValue$NamedItem.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
import type { MultiChoiceListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { MutableListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/MutableListValue.d.ts'
import type { RegistryListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/RegistryListValue.d.ts'
import type { RegistryMutableListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/RegistryMutableListValue.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { InputBind } from '../../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { Easing } from '../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector2f } from '../../../../../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../../../../../org/joml/Vector2fc.d.ts'
export class ValueGroup extends Value<Value<Object>[]> {
    constructor(name: string, value: Value<Object>[], valueType: ValueType, independentDescription: boolean, aliases: string[])
    /**
     * Stores the {@link ValueGroup} in which
     * the {@link ValueGroup} is included, can be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt:106}
     */
    base: ValueGroup | null;
    /**
     * The base key used when {@link base} is null,
     * otherwise the {@link baseKey} from {@link base}
     * is used when its base is null and so on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt:113}
     */
    readonly baseKey: string;
    readonly containedValues: Value<Object>[];
    bind(name: string, default_: number): BindValue;
    bind(name: string, default_: InputBind): BindValue;
    block(name: string, default_: Block): Value<Block>;
    blocks<C extends Block[]>(name: string, default_: C): RegistryListValue<C, Block>;
    boolean(name: string, default_: boolean, aliases: string[]): Value<boolean>;
    c2sPackets<C extends Identifier[]>(name: string, default_: C): RegistryListValue<C, Identifier>;
    collectValueGroupsRecursively(): ValueGroup[];
    collectValueGroupsRecursively(prefix: string): Sequence<ValueGroup>;
    protected collectValueGroupsRecursivelyInternal(output: ValueGroup[]): void;
    collectValuesRecursively(): Value<Object>[];
    collectValuesRecursively(prefix: string): Sequence<Value<Object>>;
    protected collectValuesRecursivelyInternal(output: Value<Object>[]): void;
    color(name: string, default_: Color4b): Value<Color4b>;
    // private constructBaseKey(): string;
    /**
     * Declares a {@link CurveValue} setting using the Kotlin-DSL-style
     * builder. Inside the `block`, `this` is bound to {@link CurveValue$Builder}
     * so you can configure curve points fluently. **Use a `function` (not an
     * arrow), or the `this` binding will be lost.**
     *
     * @param name Display name of the setting.
     * @param block Builder configurator. `this` is the curve builder.
     * @returns The curve setting, which you can use to read interpolated
     *          values at runtime.
     *
     * @example
     * ```ts
     * const easing = group.curve("Speed Curve", function () {
     *     this.tension = 0.5;
     *     // configure points...
     * });
     * ```
     *
     * Source: `ValueGroup.kt:502` - inline DSL builder. (Method has no
     * KDoc in upstream; this docstring is authored locally.)
     */
    curve(name: string, block: (this: CurveValue$Builder) => void): CurveValue;
    curve(name: string, default_: Vector2f[], xAxis: CurveValue$Axis, yAxis: CurveValue$Axis, tension: number): CurveValue;
    drop<T extends ValueGroup>(valueGroup: T): T;
    easing(name: string, default_: Easing): ChoiceListValue<Easing>;
    entityTypes<C extends EntityType<any>[]>(name: string, default_: C): RegistryListValue<C, EntityType<any>>;
    enumChoice<T extends Enum<T> & Tagged>(name: string, default_: T, aliases: string[]): ChoiceListValue<T>;
    enumChoice<T extends Tagged>(name: string, default_: T, choices: T[], aliases: string[]): ChoiceListValue<T>;
    file(name: string, default_: File | null, dialogMode: FileDialogMode, supportedExtensions: string[] | null): FileValue;
    float(name: string, default_: number, range: ClosedFloatingPointRange<number>, suffix: string, aliases: string[]): RangedValue<number>;
    floatRange(name: string, default_: ClosedFloatingPointRange<number>, range: ClosedFloatingPointRange<number>, suffix: string, aliases: string[]): RangedValue<ClosedFloatingPointRange<number>>;
    int(name: string, default_: number, range: { start: number; endInclusive: number; step: number }, suffix: string, aliases: string[]): RangedValue<number>;
    intRange(name: string, default_: { start: number; endInclusive: number; step: number }, range: { start: number; endInclusive: number; step: number }, suffix: string, aliases: string[]): RangedValue<{ start: number; endInclusive: number; step: number }>;
    item(name: string, default_: Item): Value<Item>;
    itemList<C extends Item[]>(name: string, default_: C): RegistryMutableListValue<C, Item>;
    itemList<T extends E[], E extends unknown>(name: string, defaultValue: T, items: ItemListValue$NamedItem<E>[], valueType: ValueType): ItemListValue<T, E>;
    items<C extends Item[]>(name: string, default_: C): RegistryListValue<C, Item>;
    /**
     * Assigns the value of the settings to the component
     *
     * A component can have dynamic settings which can be assigned through the JSON file
     * These have to be interpreted and assigned to the value group
     *
     * An example:
     * {
     *     "type": "INT",
     *     "name": "Size",
     *     "value": 14,
     *     "range": {
     *         "min": 1,
     *         "max": 100
     *     },
     *     "suffix": "px"
     * }
     *
     * TODO: Replace with proper deserialization
     *
     * @param valueObject JsonObject
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt#L642 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt:642}
     */
    json(valueObject: JsonObject): void;
    key(name: string, default_: InputConstants$Key): Value<InputConstants$Key>;
    key(name: string, default_: number): Value<InputConstants$Key>;
    list<T extends E[], E extends unknown>(name: string, defaultValue: T, valueType: ValueType): ListValue<T, E>;
    mobEffects<C extends MobEffect[]>(name: string, default_: C): RegistryListValue<C, MobEffect>;
    protected modes<T extends Mode>(eventListener: EventListener, name: string, active: T, modes: T[]): ModeValueGroup<T>;
    protected modes<T extends Mode>(eventListener: EventListener, name: string, activeCallback: (param0: T[]) => number, modesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    protected modes<T extends Mode>(eventListener: EventListener, name: string, activeIndex: number, choicesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    multiEnumChoice<T extends Enum<T> & Tagged>(name: string, default_: T[], choices: T[], canBeNone: boolean): MultiChoiceListValue<T>;
    multiEnumChoice<T extends Enum<T> & Tagged>(name: string, default_: T[], canBeNone: boolean): MultiChoiceListValue<T>;
    multiEnumChoice<T extends Tagged>(name: string, default_: T[], choices: T[], canBeNone: boolean, isOrderSensitive: boolean): MultiChoiceListValue<T>;
    mutableList<T extends E[], E extends unknown>(name: string, defaultValue: T, valueType: ValueType): MutableListValue<T, E>;
    // private rangedValue<T extends unknown>(name: string, defaultValue: T, range: ClosedRange<any>, suffix: string, valueType: ValueType, aliases: string[]): RangedValue<T>;
    regex(name: string, default_: Regex): Value<Regex>;
    regexList<C extends Regex[]>(name: string, default_: C): MutableListValue<C, Regex>;
    registryList<T extends E[], E extends unknown>(name: string, defaultValue: T, valueType: ValueType): RegistryListValue<T, E>;
    registryMutableList<T extends E[], E extends unknown>(name: string, defaultValue: T, valueType: ValueType): RegistryMutableListValue<T, E>;
    /**
     * Restore all values to their default values
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt#L287 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt:287}
     */
    restore(): void;
    s2cPackets<C extends Identifier[]>(name: string, default_: C): RegistryListValue<C, Identifier>;
    // private shouldWalkKey(currentKey: string | null, prefix: string): boolean;
    sounds<C extends SoundEvent[]>(name: string, default_: C): RegistryListValue<C, SoundEvent>;
    text(name: string, default_: string): Value<string>;
    textList<C extends string[]>(name: string, default_: C): MutableListValue<C, string>;
    tree<T extends ValueGroup>(valueGroup: T): T;
    treeAll<T extends ValueGroup>(valueGroups: T[]): void;
    value<V extends Value<Object>>(value: V): V;
    value<T extends unknown>(name: string, defaultValue: T, valueType: ValueType, aliases: string[]): Value<T>;
    vec2f(name: string, default_: Vector2fc): Value<Vector2fc>;
    vec3d(name: string, default_: Vec3, useLocateButton: boolean, aliases: string[]): Value<Vec3>;
    vec3i(name: string, default_: Vec3i, useLocateButton: boolean, aliases: string[]): Value<Vec3i>;
    walkInit(): void;
    /**
     * Walks the path of the {@link ValueGroup} and its children
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt#L125 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ValueGroup.kt:125}
     */
    walkKeyPath(previousBaseKey: string | null): void;
}