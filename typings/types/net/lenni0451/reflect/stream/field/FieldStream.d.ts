import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { FieldWrapper } from '../../../../../net/lenni0451/reflect/stream/field/FieldWrapper.d.ts'
export class FieldStream extends Object {
    constructor(arg0: RStream, arg1: boolean)
    private constructor(arg0: RStream, arg1: FieldWrapper[])
    // private fields: FieldWrapper[];
    // private parent: RStream;
    by(arg0: number): FieldWrapper;
    by(arg0: string): FieldWrapper;
    copy(): FieldStream;
    filter(arg0: Class<Object>): FieldStream;
    filter(arg0: (param0: FieldWrapper) => boolean): FieldStream;
    filter(arg0: string[]): FieldStream;
    filter(arg0: boolean): FieldStream;
    filterAnnotation(arg0: Class<Object>): FieldStream;
    filterNames(arg0: string[]): FieldStream;
    filterStatic(arg0: boolean): FieldStream;
    filterType(arg0: Class<Object>): FieldStream;
    forEach(arg0: (param0: FieldWrapper) => void): FieldStream;
    iterator(): Iterator<FieldWrapper>;
    jstream(): Stream<FieldWrapper>;
    map<T extends Object | number | string | boolean>(arg0: (param0: FieldWrapper) => T): Stream<T>;
    opt(arg0: number): Optional<FieldWrapper>;
    opt(arg0: string): Optional<FieldWrapper>;
    parent(): RStream;
    size(): number;
}