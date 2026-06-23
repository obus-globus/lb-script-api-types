import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { EventSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer.d.ts'
import type { SerializerMap } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SerializerMap$Builder<R extends Object | number | string | boolean, A extends Enum<A>, IO extends Object | number | string | boolean> extends Object {
    constructor(arg0: SNbt<any>)
    // private sNbt: SNbt<any>;
    // private serializers: EventSerializer<R, R, A, IO>[];
    add(arg0: EventSerializer<R, R, A, IO>): SerializerMap$Builder<R, A, IO>;
    finalize(arg0: (param0: R) => A): SerializerMap<R, A, IO>;
}