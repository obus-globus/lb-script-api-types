import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { ModifierWrapper } from '../../../../../net/lenni0451/reflect/stream/general/ModifierWrapper.d.ts'
import type { MethodStream } from '../../../../../net/lenni0451/reflect/stream/method/MethodStream.d.ts'
export class MethodWrapper extends Object {
    constructor(arg0: MethodStream, arg1: Method)
    // private method: Method;
    // private modifier: ModifierWrapper;
    // private parent: MethodStream;
    annotations(): Stream<Annotation>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    invoke<T extends unknown>(): T;
    invokeArgs<T extends unknown>(arg0: Object[]): T;
    invokeInstance<T extends unknown>(arg0: Object, arg1: Object[]): T;
    modifier(): ModifierWrapper;
    name(): string;
    owner(): Class<Object>;
    parameterCount(): number;
    parameterTypes(): Class<Object>[];
    parent(): MethodStream;
    raw(): Method;
    returnType(): Class<Object>;
    stream(): RStream;
    stream(arg0: Class<Object>): RStream;
    streamArgs(arg0: Class<Object>, arg1: Object[]): RStream;
    streamArgs(arg0: Object[]): RStream;
    streamInstance(arg0: Class<Object>, arg1: Object, arg2: Object[]): RStream;
    streamInstance(arg0: Object, arg1: Object[]): RStream;
    toString(): string;
}