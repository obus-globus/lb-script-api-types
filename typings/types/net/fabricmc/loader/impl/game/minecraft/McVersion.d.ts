import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class McVersion extends Object {
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: OptionalInt)
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