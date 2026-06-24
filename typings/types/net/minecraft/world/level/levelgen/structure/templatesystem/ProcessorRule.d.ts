import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PosRuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTest.d.ts'
import type { RuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTest.d.ts'
import type { Passthrough } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/Passthrough.d.ts'
import type { RuleBlockEntityModifier } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifier.d.ts'
export class ProcessorRule extends Object {
    static CODEC: Codec<ProcessorRule>;
    static DEFAULT_BLOCK_ENTITY_MODIFIER: Passthrough;
    constructor(inputPredicate: RuleTest, locPredicate: RuleTest, outputState: BlockState)
    constructor(inputPredicate: RuleTest, locPredicate: RuleTest, posPredicate: PosRuleTest, outputState: BlockState)
    constructor(inputPredicate: RuleTest, locPredicate: RuleTest, posPredicate: PosRuleTest, outputState: BlockState, blockEntityModifier: RuleBlockEntityModifier)
    // private blockEntityModifier: RuleBlockEntityModifier;
    // private inputPredicate: RuleTest;
    // private locPredicate: RuleTest;
    readonly outputState: BlockState;
    // private posPredicate: PosRuleTest;
    getOutputState(): BlockState;
    getOutputTag(random: RandomSource, existingTag: CompoundTag): CompoundTag;
    test(level: LevelReader, inputState: BlockState, inTemplatePos: BlockPos, worldPos: BlockPos, reference: BlockPos, random: RandomSource): boolean;
}