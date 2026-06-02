import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DrawableGizmoPrimitives } from '../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives.d.ts'
export class LevelRenderer$FinalizedGizmos extends Record {
    private constructor(standardPrimitives: DrawableGizmoPrimitives, alwaysOnTopPrimitives: DrawableGizmoPrimitives)
    // private alwaysOnTopPrimitives: DrawableGizmoPrimitives;
    // private standardPrimitives: DrawableGizmoPrimitives;
    alwaysOnTopPrimitives(): DrawableGizmoPrimitives;
    equals(o: Object | null): boolean;
    hashCode(): number;
    standardPrimitives(): DrawableGizmoPrimitives;
    toString(): string;
}