import type { CoreLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$InstanceLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { VarHandle } from '../../../../../java/lang/invoke/VarHandle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CoreLocations$FieldLocation extends CoreLocations$InstanceLocation {
    constructor(index: number, field: FieldInfo)
    // private field: FieldInfo;
    // private varHandle: VarHandle;
    equals(obj: Object | null): boolean;
    getWhereString(): string;
    hashCode(): number;
}