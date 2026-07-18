import type { SerializedMapValue } from '../../../../io/ktor/util/collections/SerializedMapValue.d.ts'
import type { StringMap } from '../../../../io/ktor/util/collections/StringMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
export class MapDelegatesKt extends Object {
    static asBoolean(self: string): SerializedMapValue<boolean>;
    static asPresenceBoolean(self: string): SerializedMapValue<boolean>;
    static getValue<T extends unknown>(self: SerializedMapValue<T>, thisRef: StringMap, property: KProperty<Object>): T | null;
    static getValue(self: string, thisRef: StringMap, property: KProperty<Object>): string | null;
    static setValue<T extends unknown>(self: SerializedMapValue<T>, thisRef: StringMap, property: KProperty<Object>, value: T | null): void;
    static setValue(self: string, thisRef: StringMap, property: KProperty<Object>, value: string | null): void;
}