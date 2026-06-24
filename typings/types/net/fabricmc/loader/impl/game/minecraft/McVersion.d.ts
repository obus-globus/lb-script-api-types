import type { McVersion$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class McVersion extends Object {
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: OptionalInt)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: OptionalInt, arg5: McVersion$1)
    readonly classVersion: OptionalInt;
    readonly id: string;
    readonly name: string;
    readonly normalized: string;
    readonly raw: string;
    getClassVersion(): OptionalInt;
    getId(): string;
    getName(): string;
    getNormalized(): string;
    getRaw(): string;
    toString(): string;
}