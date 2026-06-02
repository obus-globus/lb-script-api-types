import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompilableString<T extends Object | number | string | boolean> extends Object {
    static codec(paramcompiler: (param0: string) => Object | null): Codec<Object>;
    private constructor(source: string, compiled: T)
    // private compiled: T;
    // private source: string;
    compiled(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): string;
    toString(): string;
}