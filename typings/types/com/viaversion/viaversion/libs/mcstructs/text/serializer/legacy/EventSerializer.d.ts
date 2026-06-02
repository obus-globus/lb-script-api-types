import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { EventSerializer$IOFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer$IOFunction.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EventSerializer<R extends Object | number | string | boolean, T extends R, A extends Enum<A>, IO extends Object | number | string | boolean> extends Object {
    constructor(arg0: (param0: R) => kotlin.Boolean, arg1: (param0: T, param1: IO) => unknown, arg2: A, arg3: (param0: IO, param1: T) => unknown)
    readonly action: A;
    // private classMatcher: (param0: R) => kotlin.Boolean;
    // private deserializer: (param0: IO, param1: T) => unknown;
    // private serializer: (param0: T, param1: IO) => unknown;
    deserialize(arg0: SNbt<Object>, arg1: IO): T;
    getAction(): A;
    matches(arg0: A): boolean;
    matches(arg0: R): boolean;
    serialize(arg0: SNbt<Object>, arg1: T): IO;
}