import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValues$Companion } from '../../../io/ktor/util/StringValues$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class StringValuesSingleImpl extends Object implements StringValues {
    static Companion: StringValues$Companion;
    constructor(caseInsensitiveName: boolean, name: string, values: string[])
    readonly caseInsensitiveName: boolean;
    readonly name: string;
    readonly values: string[];
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    entries(): Map$Entry<string, string[]>[];
    equals(other: Object | null): boolean;
    forEach(body: (param0: string, param1: string[]) => void): void;
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    hashCode(): number;
    isEmpty(): boolean;
    names(): string[];
    toString(): string;
}