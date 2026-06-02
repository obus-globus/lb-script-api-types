import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BookSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/BookSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
export class BookSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<BookSpecialRenderer$Unbaked>;
    // private openAngle: number;
    // private page1: number;
    // private page2: number;
    bake(context: SpecialModelRenderer$BakingContext): BookSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    openAngle(): number;
    page1(): number;
    page2(): number;
    toString(): string;
    type(): MapCodec<BookSpecialRenderer$Unbaked>;
}