import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RStream } from '../../../../../net/lenni0451/reflect/stream/RStream.d.ts'
import type { FieldStream } from '../../../../../net/lenni0451/reflect/stream/field/FieldStream.d.ts'
import type { ModifierWrapper } from '../../../../../net/lenni0451/reflect/stream/general/ModifierWrapper.d.ts'
export class FieldWrapper extends Object {
    constructor(arg0: FieldStream, arg1: Field)
    // private field: Field;
    // private modifier: ModifierWrapper;
    // private parent: FieldStream;
    annotations(): Stream<Annotation>;
    copy(arg0: Object): void;
    copy(arg0: Object, arg1: Object): void;
    equals(arg0: Object | null): boolean;
    genericTypes(): Type[];
    get<T extends unknown>(): T;
    get<T extends unknown>(arg0: Object): T;
    hashCode(): number;
    modifier(): ModifierWrapper;
    name(): string;
    owner(): Class<Object>;
    parent(): FieldStream;
    raw(): Field;
    set(arg0: Object): void;
    set(arg0: Object, arg1: Object): void;
    stream(): RStream;
    stream(arg0: Class<Object>): RStream;
    stream(arg0: Class<Object>, arg1: Object): RStream;
    stream(arg0: Object): RStream;
    toString(): string;
    type(): Class<Object>;
}