import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Enums$StringConverter<T extends Enum<T>> extends Converter<string, T> implements Serializable {
    static from(paramforwardFunction: (param0: Object) => Object | null, parambackwardFunction: (param0: Object) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    constructor(enumClass: Class<T>)
    // private enumClass: Class<T>;
    doBackward(enumValue: T): string;
    doForward(value: string): T;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}