import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { ConstructorWrapper } from '../../../../../net/lenni0451/reflect/stream/constructor/ConstructorWrapper.d.ts'
export class ConstructorStream extends Object {
    constructor(arg0: RStream)
    private constructor(arg0: RStream, arg1: ConstructorWrapper[])
    // private constructors: ConstructorWrapper[];
    // private parent: RStream;
    by(arg0: Class<Object>[]): ConstructorWrapper;
    by(arg0: number): ConstructorWrapper;
    copy(): ConstructorStream;
    filter(arg0: (param0: ConstructorWrapper) => boolean): ConstructorStream;
    filter(arg0: Class<Object>[]): ConstructorStream;
    filter(arg0: boolean): ConstructorStream;
    filterAnnotation(arg0: Class<Object>): ConstructorStream;
    filterParameters(arg0: Class<Object>[]): ConstructorStream;
    filterStatic(arg0: boolean): ConstructorStream;
    forEach(arg0: (param0: ConstructorWrapper) => void): ConstructorStream;
    iterator(): Iterator<ConstructorWrapper>;
    jstream(): Stream<ConstructorWrapper>;
    map<T extends unknown>(arg0: (param0: ConstructorWrapper) => T): Stream<T>;
    opt(arg0: Class<Object>[]): Optional<ConstructorWrapper>;
    opt(arg0: number): Optional<ConstructorWrapper>;
    parent(): RStream;
    size(): number;
}