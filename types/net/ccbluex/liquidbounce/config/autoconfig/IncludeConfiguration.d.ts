import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IncludeConfiguration$Companion } from '../../../../../net/ccbluex/liquidbounce/config/autoconfig/IncludeConfiguration$Companion.d.ts'
export class IncludeConfiguration extends Record {
    static Companion: IncludeConfiguration$Companion;
    static DEFAULT: IncludeConfiguration;
    constructor(includeBinds: boolean, includeAction: boolean, includeHidden: boolean)
    // private includeAction: boolean;
    /*not mapped: */ includeAction(): boolean;
    // private includeBinds: boolean;
    /*not mapped: */ includeBinds(): boolean;
    // private includeHidden: boolean;
    /*not mapped: */ includeHidden(): boolean;
    component1(): boolean;
    component2(): boolean;
    component3(): boolean;
    copy(includeBinds: boolean, includeAction: boolean, includeHidden: boolean): IncludeConfiguration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}