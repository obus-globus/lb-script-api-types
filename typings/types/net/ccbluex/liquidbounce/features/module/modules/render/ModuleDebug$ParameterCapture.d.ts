import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleDebug$ParameterCapture extends Record {
    constructor(time: number, value: Object | null)
    // private time: number;
    /*not mapped: */ time(): number;
    // private value: Object | null;
    /*not mapped: */ value(): Object | null;
    component1(): number;
    component2(): Object | null;
    copy(time: number, value: Object | null): ModuleDebug$ParameterCapture;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}