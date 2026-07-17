import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CreakingHeartState extends Enum<CreakingHeartState> implements StringRepresentable {
    static AWAKE: CreakingHeartState;
    static DORMANT: CreakingHeartState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UPROOTED: CreakingHeartState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CreakingHeartState;
    static values(): CreakingHeartState[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "UPROOTED" | "DORMANT" | "AWAKE";
}