import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModulePacketLogger$PacketField extends Record {
    constructor(name: string, type: Type, value: Object | null)
    // private name: string;
    /*not mapped: */ name(): string;
    // private type: Type;
    /*not mapped: */ type(): Type;
    // private value: Object | null;
    /*not mapped: */ value(): Object | null;
    component1(): string;
    component2(): Type;
    component3(): Object | null;
    copy(name: string, type: Type, value: Object | null): ModulePacketLogger$PacketField;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}