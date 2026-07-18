import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class UrlDecodedParametersBuilder extends Object implements ParametersBuilder {
    constructor(encodedParametersBuilder: ParametersBuilder)
    readonly caseInsensitiveName: boolean;
    // private encodedParametersBuilder: ParametersBuilder;
    append(name: string, value: string): void;
    appendAll(stringValues: StringValues): void;
    appendAll(name: string, values: string[]): void;
    appendMissing(stringValues: StringValues): void;
    appendMissing(name: string, values: string[]): void;
    build(): Parameters;
    clear(): void;
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    entries(): Map$Entry<string, string[]>[];
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
    remove(name: string): void;
    remove(name: string, value: string): boolean;
    removeKeysWithNoEntries(): void;
    set(name: string, value: string): void;
}