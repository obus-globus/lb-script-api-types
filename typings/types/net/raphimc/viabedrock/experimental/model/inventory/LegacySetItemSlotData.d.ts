import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContainerEnumName } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerEnumName.d.ts'
export class LegacySetItemSlotData extends Record {
    constructor(container: ContainerEnumName, slots: number[])
    // private container: ContainerEnumName;
    // private slots: number[];
    container(): ContainerEnumName;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    slots(): number[];
    toString(): string;
}