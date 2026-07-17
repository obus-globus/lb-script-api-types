import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VerticalAnchor } from '../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
export class VerticalAnchor$BelowTop extends Record implements VerticalAnchor {
    static BOTTOM: VerticalAnchor;
    static CODEC: Codec<VerticalAnchor$BelowTop>;
    static TOP: VerticalAnchor;
    constructor(offset: number)
    // private offset: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    resolveY(heightAccessor: WorldGenerationContext): number;
    toString(): string;
}