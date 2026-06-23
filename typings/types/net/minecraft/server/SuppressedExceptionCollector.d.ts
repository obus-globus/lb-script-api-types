import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { SuppressedExceptionCollector$LongEntry } from '../../../net/minecraft/server/SuppressedExceptionCollector$LongEntry.d.ts'
export class SuppressedExceptionCollector extends Object {
    constructor()
    // private entryCounts: { [key: string]: any };
    // private latestEntries: SuppressedExceptionCollector$LongEntry[];
    addEntry(location: string, throwable: Throwable): void;
    dump(): string;
}