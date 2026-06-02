import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocalCache$NullEntry extends Enum<LocalCache$NullEntry> implements ReferenceEntry<Object, Object> {
    static INSTANCE: LocalCache$NullEntry;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocalCache$NullEntry;
    static values(): (Object | null)[];
    private constructor()
    getAccessTime(): number;
    getHash(): number;
    getKey(): Object;
    getNext(): ReferenceEntry<Object, Object>;
    getNextInAccessQueue(): ReferenceEntry<Object, Object>;
    getNextInWriteQueue(): ReferenceEntry<Object, Object>;
    getPreviousInAccessQueue(): ReferenceEntry<Object, Object>;
    getPreviousInWriteQueue(): ReferenceEntry<Object, Object>;
    getValueReference(): LocalCache$ValueReference<Object, Object>;
    getWriteTime(): number;
    setAccessTime(time: number): void;
    setNextInAccessQueue(next: ReferenceEntry<Object, Object>): void;
    setNextInWriteQueue(next: ReferenceEntry<Object, Object>): void;
    setPreviousInAccessQueue(previous: ReferenceEntry<Object, Object>): void;
    setPreviousInWriteQueue(previous: ReferenceEntry<Object, Object>): void;
    setValueReference(valueReference: LocalCache$ValueReference<Object, Object>): void;
    setWriteTime(time: number): void;
    name(): "INSTANCE";
}