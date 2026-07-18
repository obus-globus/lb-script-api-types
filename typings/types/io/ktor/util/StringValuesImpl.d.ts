import type { JavaMap } from '../../../JavaMap.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValues$Companion } from '../../../io/ktor/util/StringValues$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class StringValuesImpl extends Object implements StringValues {
    static Companion: StringValues$Companion;
    constructor(caseInsensitiveName: boolean, values: JavaMap<string, string[]>)
    readonly caseInsensitiveName: boolean;
    // private entryCount: number;
    // private hashBuckets: number[];
    // private hashNext: number[];
    // private keyStorage: string[];
    // private valueStorage: string[][];
    // private /*not mapped: */ getValues(): JavaMap<string, string[]>;
    // private computeHash(key: string): number;
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    entries(): Map$Entry<string, string[]>[];
    equals(other: Object | null): boolean;
    forEach(body: (param0: string, param1: string[]) => void): void;
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    hashCode(): number;
    isEmpty(): boolean;
    // private listForKey(name: string): string[] | null;
    names(): string[];
    toString(): string;
}