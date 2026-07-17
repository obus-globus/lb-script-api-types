import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CopperGolemStatueBlock$Pose extends Enum<CopperGolemStatueBlock$Pose> implements StringRepresentable {
    static BY_ID: (param0: number) => CopperGolemStatueBlock$Pose;
    static CODEC: Codec<CopperGolemStatueBlock$Pose>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RUNNING: CopperGolemStatueBlock$Pose;
    static SITTING: CopperGolemStatueBlock$Pose;
    static STANDING: CopperGolemStatueBlock$Pose;
    static STAR: CopperGolemStatueBlock$Pose;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CopperGolemStatueBlock$Pose;
    static values(): CopperGolemStatueBlock$Pose[];
    private constructor(name: string)
    // private name: string;
    getNextPose(): CopperGolemStatueBlock$Pose;
    getSerializedName(): string;
    name(): "STANDING" | "SITTING" | "RUNNING" | "STAR";
}