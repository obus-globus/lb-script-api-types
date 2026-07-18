import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ParametersBuilder extends StringValuesBuilder, Object{
    append(name: string, value: string): void;
    appendAll(stringValues: StringValues): void;
    appendMissing(stringValues: StringValues): void;
    build(): Parameters;
    clear(): void;
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    get(name: string): string | null;
    isEmpty(): boolean;
    remove(name: string): void;
    remove(name: string, value: string): boolean;
    removeKeysWithNoEntries(): void;
    set(name: string, value: string): void;
}