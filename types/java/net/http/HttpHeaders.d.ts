import type { Optional } from '../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../java/util/OptionalLong.d.ts'
import type { BiPredicate } from '../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpHeaders extends Object {
    static of(paramarg0: { [key: string]: Object | null }, paramarg1: (param0: string, param1: string) => kotlin.Boolean): HttpHeaders;
    private constructor(arg0: { [key: string]: string[] })
    // private headers: { [key: string]: string[] };
    allValues(arg0: string): string[];
    equals(arg0: Object | null): boolean;
    firstValue(arg0: string): Optional<string>;
    firstValueAsLong(arg0: string): OptionalLong;
    hashCode(): number;
    map(): { [key: string]: string[] };
    toString(): string;
}