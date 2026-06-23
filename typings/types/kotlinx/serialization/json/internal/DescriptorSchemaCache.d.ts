import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { DescriptorSchemaCache$Key } from '../../../../kotlinx/serialization/json/internal/DescriptorSchemaCache$Key.d.ts'
export class DescriptorSchemaCache extends Object {
    constructor()
    // private map: Map<SerialDescriptor, Map<DescriptorSchemaCache$Key<Object>, Object>>;
    get<T extends unknown>(descriptor: SerialDescriptor, key: DescriptorSchemaCache$Key<T>): T | null;
    getOrPut<T extends unknown>(descriptor: SerialDescriptor, key: DescriptorSchemaCache$Key<T>, defaultValue: () => T): T;
    set<T extends unknown>(descriptor: SerialDescriptor, key: DescriptorSchemaCache$Key<T>, value: T): void;
}