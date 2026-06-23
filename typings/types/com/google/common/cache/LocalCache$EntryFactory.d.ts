import type { LocalCache$Segment } from '../../../../com/google/common/cache/LocalCache$Segment.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocalCache$EntryFactory extends Enum<LocalCache$EntryFactory> {
    static STRONG: LocalCache$EntryFactory;
    static STRONG_ACCESS: LocalCache$EntryFactory;
    static STRONG_ACCESS_WRITE: LocalCache$EntryFactory;
    static STRONG_WRITE: LocalCache$EntryFactory;
    static WEAK: LocalCache$EntryFactory;
    static WEAK_ACCESS: LocalCache$EntryFactory;
    static WEAK_ACCESS_WRITE: LocalCache$EntryFactory;
    static WEAK_WRITE: LocalCache$EntryFactory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocalCache$EntryFactory;
    static values(): (Object | null)[];
    private constructor()
    copyAccessEntry<K extends unknown, V extends unknown>(original: ReferenceEntry<K, V>, newEntry: ReferenceEntry<K, V>): void;
    copyEntry<K extends unknown, V extends unknown>(segment: LocalCache$Segment<K, V>, original: ReferenceEntry<K, V>, newNext: ReferenceEntry<K, V>, key: K): ReferenceEntry<K, V>;
    copyWriteEntry<K extends unknown, V extends unknown>(original: ReferenceEntry<K, V>, newEntry: ReferenceEntry<K, V>): void;
    newEntry<K extends unknown, V extends unknown>(segment: LocalCache$Segment<K, V>, key: K, hash: number, next: ReferenceEntry<K, V>): ReferenceEntry<K, V>;
    name(): "STRONG" | "STRONG_ACCESS" | "STRONG_WRITE" | "STRONG_ACCESS_WRITE" | "WEAK" | "WEAK_ACCESS" | "WEAK_WRITE" | "WEAK_ACCESS_WRITE";
}