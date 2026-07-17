import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../java/util/OptionalLong.d.ts'
import type { BiPredicate } from '../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpHeaders extends Object {
    static of(paramarg0: JavaMap<string, string[]>, paramarg1: (param0: string, param1: string) => boolean): HttpHeaders;
    private constructor(arg0: JavaMap<string, string[]>)
    // private headers: JavaMap<string, string[]>;
    allValues(arg0: string): string[];
    equals(arg0: Object | null): boolean;
    firstValue(arg0: string): Optional<string>;
    firstValueAsLong(arg0: string): OptionalLong;
    hashCode(): number;
    map(): JavaMap<string, string[]>;
    toString(): string;
}