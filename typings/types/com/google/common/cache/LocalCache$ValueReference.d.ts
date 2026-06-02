import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LocalCache$ValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    copyFor(queue: ReferenceQueue<V>, value: V, entry: ReferenceEntry<K, V>): LocalCache$ValueReference<K, V>;
    get(): V;
    getEntry(): ReferenceEntry<K, V>;
    getWeight(): number;
    isActive(): boolean;
    isLoading(): boolean;
    notifyNewValue(newValue: V): void;
    waitForValue(): V;
}