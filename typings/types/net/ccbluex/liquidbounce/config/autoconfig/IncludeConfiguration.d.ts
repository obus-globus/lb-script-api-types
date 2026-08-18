import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionalInclusion } from '../../../../../net/ccbluex/liquidbounce/config/OptionalInclusion.d.ts'
import type { IncludeConfiguration$Companion } from '../../../../../net/ccbluex/liquidbounce/config/autoconfig/IncludeConfiguration$Companion.d.ts'
export class IncludeConfiguration extends Record {
    static Companion: IncludeConfiguration$Companion;
    static DEFAULT: IncludeConfiguration;
    constructor(includeBinds: boolean, includeHidden: boolean, optionalInclusions: OptionalInclusion[])
    // private includeBinds: boolean;
    /*not mapped: */ includeBinds(): boolean;
    // private includeHidden: boolean;
    /*not mapped: */ includeHidden(): boolean;
    // private optionalInclusions: OptionalInclusion[];
    /*not mapped: */ optionalInclusions(): OptionalInclusion[];
    component1(): boolean;
    component2(): boolean;
    component3(): OptionalInclusion[];
    copy(includeBinds: boolean, includeHidden: boolean, optionalInclusions: OptionalInclusion[]): IncludeConfiguration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}