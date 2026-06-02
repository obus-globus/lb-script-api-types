import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharPredicate } from '../../../../../net/minecraft/CharPredicate.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export class StringArgs extends Object {
    static empty(): StringArgs;
    static emptyNew(): StringArgs;
    static full(paramarg0: string, paramarg1: string, paramarg2: string): StringArgs;
    static full(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean, paramarg4: (param0: string) => kotlin.Boolean): StringArgs;
    static keyed(paramarg0: string, paramarg1: string, paramarg2: string): StringArgs;
    static keyed(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean, paramarg4: (param0: string) => kotlin.Boolean): StringArgs;
    static ordered(paramarg0: string, paramarg1: string): StringArgs;
    private constructor(arg0: string)
    // private currentOrdered: number;
    // private input: string;
    // private keyed: { [key: string]: string };
    // private keyedMaps: { [key: string]: StringArgs };
    // private ordered: string[];
    contains(arg0: string): boolean;
    get(arg0: string): string;
    get(arg0: string, arg1: Codec<T>): DataResult<T>;
    get(arg0: string, arg1: Codec<T>, arg2: HolderLookup$Provider): DataResult<T>;
    get(arg0: string, arg1: number): string;
    get(arg0: string, arg1: number, arg2: string): string;
    get(arg0: string, arg1: string): string;
    getNested(arg0: string): StringArgs;
    getNestedOrEmpty(arg0: string): StringArgs;
    getNext(arg0: string): string;
    getNext(arg0: string, arg1: string): string;
    ifPresent(arg0: string, arg1: (param0: string) => void): void;
    input(): string;
    isEmpty(): boolean;
    ordered(): string[];
    size(): number;
    toString(): string;
    unsafeKeyed(): { [key: string]: string };
    unsafeKeyedMap(): { [key: string]: StringArgs };
    unsafeOrdered(): string[];
}