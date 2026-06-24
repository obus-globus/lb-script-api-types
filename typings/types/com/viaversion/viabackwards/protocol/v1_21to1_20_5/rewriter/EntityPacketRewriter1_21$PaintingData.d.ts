import type { PaintingVariant } from '../../../../../../com/viaversion/viaversion/api/minecraft/PaintingVariant.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityPacketRewriter1_21$PaintingData extends Record {
    private constructor(painting: PaintingVariant, id: number)
    // private id: number;
    // private painting: PaintingVariant;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    painting(): PaintingVariant;
    toString(): string;
}