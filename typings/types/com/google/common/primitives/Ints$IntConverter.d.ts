import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Ints$IntConverter extends Converter<string, number> implements Serializable {
    static from(paramforwardFunction: (param0: Object) => boolean, parambackwardFunction: (param0: Object) => boolean): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    private constructor()
    doBackward(value: number): string;
    doForward(value: string): number;
    // private readResolve(): Object;
    toString(): string;
}