import type { CaseFormat } from '../../../../com/google/common/base/CaseFormat.d.ts'
import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CaseFormat$StringConverter extends Converter<string, string> implements Serializable {
    static from<A extends unknown, B extends unknown>(paramforwardFunction: (param0: Object) => B, parambackwardFunction: (param0: Object) => A): Converter<A, B>;
    static identity<T extends unknown>(): Converter<T, T>;
    constructor(sourceFormat: CaseFormat, targetFormat: CaseFormat)
    // private sourceFormat: CaseFormat;
    // private targetFormat: CaseFormat;
    doBackward(s: string): string;
    doForward(s: string): string;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}