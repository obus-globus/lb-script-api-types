import type { JavaMap } from '../../../JavaMap.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class StringValuesBuilderImpl extends Object implements StringValuesBuilder {
    constructor(caseInsensitiveName: boolean, size: number)
    readonly caseInsensitiveName: boolean;
    // private values: JavaMap<string, string[]>;
    // private /*not mapped: */ getValues(): JavaMap<string, string[]>;
    append(name: string, value: string): void;
    appendAll(stringValues: StringValues): void;
    appendAll(name: string, values: string[]): void;
    appendMissing(stringValues: StringValues): void;
    appendMissing(name: string, values: string[]): void;
    build(): StringValues;
    clear(): void;
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    // private ensureListForKey(name: string): string[];
    entries(): Map$Entry<string, string[]>[];
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
    remove(name: string): void;
    remove(name: string, value: string): boolean;
    removeKeysWithNoEntries(): void;
    set(name: string, value: string): void;
    protected validateName(name: string): void;
    protected validateValue(value: string): void;
}