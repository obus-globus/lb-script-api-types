import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AlterGroundDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/AlterGroundDecorator.d.ts'
import type { AttachedToLeavesDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/AttachedToLeavesDecorator.d.ts'
import type { AttachedToLogsDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/AttachedToLogsDecorator.d.ts'
import type { BeehiveDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/BeehiveDecorator.d.ts'
import type { CocoaDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/CocoaDecorator.d.ts'
import type { CreakingHeartDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/CreakingHeartDecorator.d.ts'
import type { LeaveVineDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/LeaveVineDecorator.d.ts'
import type { PaleMossDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/PaleMossDecorator.d.ts'
import type { PlaceOnGroundDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/PlaceOnGroundDecorator.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TrunkVineDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TrunkVineDecorator.d.ts'
export class TreeDecoratorType<P extends TreeDecorator> extends Object {
    static ALTER_GROUND: TreeDecoratorType<AlterGroundDecorator>;
    static ATTACHED_TO_LEAVES: TreeDecoratorType<AttachedToLeavesDecorator>;
    static ATTACHED_TO_LOGS: TreeDecoratorType<AttachedToLogsDecorator>;
    static BEEHIVE: TreeDecoratorType<BeehiveDecorator>;
    static COCOA: TreeDecoratorType<CocoaDecorator>;
    static CREAKING_HEART: TreeDecoratorType<CreakingHeartDecorator>;
    static LEAVE_VINE: TreeDecoratorType<LeaveVineDecorator>;
    static PALE_MOSS: TreeDecoratorType<PaleMossDecorator>;
    static PLACE_ON_GROUND: TreeDecoratorType<PlaceOnGroundDecorator>;
    static TRUNK_VINE: TreeDecoratorType<TrunkVineDecorator>;
    constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}