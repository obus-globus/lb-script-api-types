import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTest.d.ts'
export class OreConfiguration$TargetBlockState extends Object {
    static CODEC: Codec<OreConfiguration$TargetBlockState>;
    private constructor(target: RuleTest, state: BlockState)
    state: BlockState;
    target: RuleTest;
}