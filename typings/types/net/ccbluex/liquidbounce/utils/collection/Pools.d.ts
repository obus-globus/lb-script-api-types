import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pool } from '../../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Matrix3x2f } from '../../../../../org/joml/Matrix3x2f.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class Pools extends Object {
    static INSTANCE: Pools;
    static Mat3x2f: Pool<Matrix3x2f>;
    static MatStack: Pool<PoseStack>;
    static MutableBlockPos: Pool<BlockPos$MutableBlockPos>;
    static StringBuilder: Pool<StringBuilder>;
    static Vec2f: Pool<Vector2f>;
    static Vec3f: Pool<Vector3f>;
    Mat3x2f: Pool<Matrix3x2f>;
    MatStack: Pool<PoseStack>;
    MutableBlockPos: Pool<BlockPos$MutableBlockPos>;
    StringBuilder: Pool<StringBuilder>;
    Vec2f: Pool<Vector2f>;
    Vec3f: Pool<Vector3f>;
    /**
     * Use {@link Pools.StringBuilder} to build {@link String}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Pools.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Pools.kt:56}
     */
    buildStringPooled(builderAction: (param0: StringBuilder) => void): string;
    buildStringPooled(capacity: number, builderAction: (param0: StringBuilder) => void): string;
}