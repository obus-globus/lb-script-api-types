import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventorySourceType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/InventorySourceType.d.ts'
import type { InventorySource_InventorySourceFlags } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/InventorySource_InventorySourceFlags.d.ts'
export class InventorySource extends Record {
    constructor(type: InventorySourceType, containerId: number, flags: InventorySource_InventorySourceFlags)
    // private containerId: number;
    // private flags: InventorySource_InventorySourceFlags;
    // private type: InventorySourceType;
    containerId(): number;
    equals(arg0: Object | null): boolean;
    flags(): InventorySource_InventorySourceFlags;
    hashCode(): number;
    toString(): string;
    type(): InventorySourceType;
}