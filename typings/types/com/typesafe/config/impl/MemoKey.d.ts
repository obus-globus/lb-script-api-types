import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MemoKey extends Object {
    constructor(arg0: AbstractConfigValue, arg1: Path)
    // private restrictToChildOrNull: Path;
    // private value: AbstractConfigValue;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}