import type { JavaMap } from '../../../JavaMap.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class StringValuesKt extends Object {
    static appendAll(self: StringValuesBuilder, builder: StringValuesBuilder): StringValuesBuilder;
    static appendAll(self: StringValuesBuilder, values: JavaMap<string, string>): StringValuesBuilder;
    static appendAll(self: StringValuesBuilder, ...values: Pair<string, string>[]): StringValuesBuilder;
    static appendAllIterable(self: StringValuesBuilder, values: JavaMap<string, string[]>): StringValuesBuilder;
    static appendAllIterable(self: StringValuesBuilder, ...values: Pair<string, string[]>[]): StringValuesBuilder;
    static appendFiltered(self: StringValuesBuilder, source: StringValues, keepEmpty: boolean, predicate: (param0: string, param1: string) => boolean): void;
    static appendIfNameAbsent(self: StringValuesBuilder, name: string, value: string): StringValuesBuilder;
    static appendIfNameAndValueAbsent(self: StringValuesBuilder, name: string, value: string): StringValuesBuilder;
    static filter(self: StringValues, keepEmpty: boolean, predicate: (param0: string, param1: string) => boolean): StringValues;
    static flattenEntries(self: StringValues): Pair<string, string>[];
    static flattenForEach(self: StringValues, block: (param0: string, param1: string) => void): void;
    static toMap(self: StringValues): JavaMap<string, string[]>;
    static valuesOf(): StringValues;
    static valuesOf(name: string, value: string, caseInsensitiveKey: boolean): StringValues;
    static valuesOf(name: string, values: string[], caseInsensitiveKey: boolean): StringValues;
    static valuesOf(map: JavaMap<string, string[]>, caseInsensitiveKey: boolean): StringValues;
    static valuesOf(pairs: Pair<string, string[]>[], caseInsensitiveKey: boolean): StringValues;
}