import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LegacySetItemSlotData extends Record {
    // private containerId: number;
    // private slots: number[];
    containerId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    slots(): number[];
    toString(): string;
}