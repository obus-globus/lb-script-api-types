import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NamedIntegerBitmask$Constructor } from '../../../../org/newsclub/net/unix/NamedIntegerBitmask$Constructor.d.ts'
export abstract class NamedIntegerBitmask<T extends NamedIntegerBitmask<T>> extends Object implements Serializable {
    constructor(arg0: string, arg1: number)
    // private flags: number;
    // private name: string;
    combineWith(arg0: T): T;
    combineWith(arg0: T[], arg1: T, arg2: (param0: T, param1: string) => unknown, arg3: T): T;
    hasFlag(arg0: T): boolean;
    name(): string;
    toString(): string;
    value(): number;
}