import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MineshaftStructure$Type extends Enum<MineshaftStructure$Type> implements StringRepresentable {
    static CODEC: Codec<MineshaftStructure$Type>;
    static MESA: MineshaftStructure$Type;
    static NORMAL: MineshaftStructure$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static byId(paramid: number): MineshaftStructure$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MineshaftStructure$Type;
    static values(): MineshaftStructure$Type[];
    private constructor(name: string, wood: Block, plank: Block, fence: Block)
    readonly fenceState: BlockState;
    readonly planksState: BlockState;
    readonly woodState: BlockState;
    getFenceState(): BlockState;
    getName(): string;
    getPlanksState(): BlockState;
    getSerializedName(): string;
    getWoodState(): BlockState;
    name(): "NORMAL" | "MESA";
}