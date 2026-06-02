import type { Instant } from '../java/time/Instant.d.ts'
import type { Date } from '../java/util/Date.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
export class Headers$Builder extends Object {
    constructor()
    // private namesAndValues: string[];
    /*not mapped: */ getNamesAndValues$okhttp(): string[];
    add(line: string): Headers$Builder;
    add(name: string, value: Instant): Headers$Builder;
    add(name: string, value: Date): Headers$Builder;
    add(name: string, value: string): Headers$Builder;
    addAll(headers: Pair<string, string>[]): Headers$Builder;
    addLenient(line: string): Headers$Builder;
    addLenient(name: string, value: string): Headers$Builder;
    addUnsafeNonAscii(name: string, value: string): Headers$Builder;
    build(): Pair<string, string>[];
    get(name: string): string | null;
    removeAll(name: string): Headers$Builder;
    set(name: string, value: Instant): Headers$Builder;
    set(name: string, value: Date): Headers$Builder;
    set(name: string, value: string): Headers$Builder;
}