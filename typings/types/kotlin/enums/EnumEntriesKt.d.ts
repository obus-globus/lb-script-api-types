import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EnumEntriesKt extends Object {
    static enumEntries<E extends Enum<E>>(entries: E[]): E[];
    static enumEntries<E extends Enum<E>>(entriesProvider: () => E[]): E[];
    static enumEntries<T extends Enum<T>>(): T[];
}