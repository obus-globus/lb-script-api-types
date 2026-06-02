import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { EventSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer.d.ts'
import type { SerializerMap$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap$Builder.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SerializerMap<R extends Object | number | string | boolean, A extends Enum<A>, IO extends Object | number | string | boolean> extends Object {
    static create(paramarg0: SNbt<Object>): SerializerMap$Builder<Object, Object, Object>;
    private constructor(arg0: SNbt<Object>, arg1: EventSerializer<R, R, A, IO>[], arg2: (param0: R) => A)
    // private sNbt: SNbt<Object>;
    // private serializers: Map<A, EventSerializer<R, R, A, IO>[]>;
    // private toActionFunction: (param0: R) => A;
    // private cast<X extends Object | number | string | boolean>(arg0: Object): X;
    deserialize(arg0: A, arg1: IO): R;
    serialize(arg0: R): IO;
}