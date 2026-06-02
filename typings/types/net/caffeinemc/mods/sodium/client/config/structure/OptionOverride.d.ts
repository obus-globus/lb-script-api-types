import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class OptionOverride extends Record {
    constructor(target: Identifier, source: string, change: Option)
    // private change: Option;
    // private source: string;
    // private target: Identifier;
    change(): Option;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    source(): string;
    target(): Identifier;
    toString(): string;
}