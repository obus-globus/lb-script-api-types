import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class MapFrame extends Record {
    static CODEC: Codec<MapFrame>;
    static frameId(parampos: BlockPos): string;
    constructor(pos: BlockPos, rotation: number, entityId: number)
    // private entityId: number;
    // private pos: BlockPos;
    // private rotation: number;
    entityId(): number;
    equals(o: Object | null): boolean;
    getId(): string;
    hashCode(): number;
    pos(): BlockPos;
    rotation(): number;
    toString(): string;
}