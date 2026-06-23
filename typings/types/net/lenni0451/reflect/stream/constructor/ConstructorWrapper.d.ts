import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { ConstructorStream } from '../../../../../net/lenni0451/reflect/stream/constructor/ConstructorStream.d.ts'
import type { ModifierWrapper } from '../../../../../net/lenni0451/reflect/stream/general/ModifierWrapper.d.ts'
export class ConstructorWrapper extends Object {
    constructor(arg0: ConstructorStream, arg1: Constructor<Object>)
    // private constructor: Constructor<Object>;
    // private modifier: ModifierWrapper;
    // private parent: ConstructorStream;
    annotations(): Stream<Annotation>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifier(): ModifierWrapper;
    newInstance<T extends unknown>(arg0: Object[]): T;
    owner(): Class<Object>;
    parameterCount(): number;
    parameterTypes(): Class<Object>[];
    parent(): ConstructorStream;
    raw(): Constructor<Object>;
    streamInstance(arg0: Class<Object>, arg1: Object[]): RStream;
    streamInstance(arg0: Object[]): RStream;
    toString(): string;
}