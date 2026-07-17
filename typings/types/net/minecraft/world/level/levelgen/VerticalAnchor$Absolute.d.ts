import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VerticalAnchor } from '../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
export class VerticalAnchor$Absolute extends Record implements VerticalAnchor {
    static BOTTOM: VerticalAnchor;
    static CODEC: Codec<VerticalAnchor$Absolute>;
    static TOP: VerticalAnchor;
    constructor(y: number)
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resolveY(heightAccessor: WorldGenerationContext): number;
    toString(): string;
    y(): number;
}