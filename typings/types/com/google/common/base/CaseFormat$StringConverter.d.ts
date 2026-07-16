import type { CaseFormat } from '../../../../com/google/common/base/CaseFormat.d.ts'
import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CaseFormat$StringConverter extends Converter<string, string> implements Serializable {
    static from(paramforwardFunction: (param0: Object) => Object | null, parambackwardFunction: (param0: Object) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    constructor(sourceFormat: CaseFormat, targetFormat: CaseFormat)
    // private sourceFormat: CaseFormat;
    // private targetFormat: CaseFormat;
    doBackward(s: string): string;
    doForward(s: string): string;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}