import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
export class ModuleDebug$DebuggedKey extends Record {
    constructor(owner: DebuggedOwner, name: string)
    // private name: string;
    /*not mapped: */ name(): string;
    // private owner: DebuggedOwner;
    /*not mapped: */ owner(): DebuggedOwner;
    component1(): DebuggedOwner;
    component2(): string;
    copy(owner: DebuggedOwner, name: string): ModuleDebug$DebuggedKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}