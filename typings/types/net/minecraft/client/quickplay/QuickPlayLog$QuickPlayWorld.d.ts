import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { QuickPlayLog$Type } from '../../../../net/minecraft/client/quickplay/QuickPlayLog$Type.d.ts'
export class QuickPlayLog$QuickPlayWorld extends Record {
    static MAP_CODEC: MapCodec<QuickPlayLog$QuickPlayWorld>;
    private constructor(type: QuickPlayLog$Type, id: string, name: string)
    // private id: string;
    // private name: string;
    // private type: QuickPlayLog$Type;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    name(): string;
    toString(): string;
    type(): QuickPlayLog$Type;
}