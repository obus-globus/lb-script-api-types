import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { Attributes } from '../../../io/ktor/util/Attributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AttributesKt extends Object {
    static AttributeKey<T extends unknown>(name: string): AttributeKey<T>;
    static putAll(self: Attributes, other: Attributes): void;
}