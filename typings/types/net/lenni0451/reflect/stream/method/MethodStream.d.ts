import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { MethodWrapper } from '../../../../../net/lenni0451/reflect/stream/method/MethodWrapper.d.ts'
export class MethodStream extends Object {
    constructor(arg0: RStream, arg1: boolean)
    private constructor(arg0: RStream, arg1: MethodWrapper[])
    // private methods: MethodWrapper[];
    // private parent: RStream;
    by(arg0: Class<Object>[]): MethodWrapper;
    by(arg0: number): MethodWrapper;
    by(arg0: string): MethodWrapper;
    by(arg0: string, arg1: Class<Object>[]): MethodWrapper;
    copy(): MethodStream;
    filter(arg0: (param0: MethodWrapper) => boolean): MethodStream;
    filter(arg0: Class<Object>[]): MethodStream;
    filter(arg0: string[]): MethodStream;
    filter(arg0: boolean): MethodStream;
    filter(arg0: string): MethodStream;
    filterAnnotation(arg0: Class<Object>): MethodStream;
    filterName(arg0: string): MethodStream;
    filterNames(arg0: string[]): MethodStream;
    filterParameters(arg0: Class<Object>[]): MethodStream;
    filterStatic(arg0: boolean): MethodStream;
    forEach(arg0: (param0: MethodWrapper) => void): MethodStream;
    iterator(): Iterator<MethodWrapper>;
    jstream(): Stream<MethodWrapper>;
    map<T extends unknown>(arg0: (param0: MethodWrapper) => T): Stream<T>;
    opt(arg0: Class<Object>[]): Optional<MethodWrapper>;
    opt(arg0: number): Optional<MethodWrapper>;
    opt(arg0: string): Optional<MethodWrapper>;
    opt(arg0: string, arg1: Class<Object>[]): Optional<MethodWrapper>;
    parent(): RStream;
    size(): number;
}