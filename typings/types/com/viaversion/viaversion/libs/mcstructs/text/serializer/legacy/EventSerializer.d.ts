import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { EventSerializer$IOFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer$IOFunction.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EventSerializer<R extends unknown, T extends R, A extends Enum<A>, IO extends unknown> extends Object {
    constructor(arg0: (param0: R) => boolean, arg1: (param0: SNbt<any>, param1: T) => IO, arg2: A, arg3: (param0: SNbt<any>, param1: IO) => T)
    readonly action: A;
    // private classMatcher: (param0: R) => boolean;
    // private deserializer: (param0: SNbt<any>, param1: IO) => T;
    // private serializer: (param0: SNbt<any>, param1: T) => IO;
    deserialize(arg0: SNbt<any>, arg1: IO): T;
    getAction(): A;
    matches(arg0: A): boolean;
    matches(arg0: R): boolean;
    serialize(arg0: SNbt<any>, arg1: T): IO;
}