import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PotentSulfurState extends Enum<PotentSulfurState> implements StringRepresentable {
    static CONTINUOUS: PotentSulfurState;
    static DORMANT: PotentSulfurState;
    static DRY: PotentSulfurState;
    static ERUPTING: PotentSulfurState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WET: PotentSulfurState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PotentSulfurState;
    static values(): PotentSulfurState[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "DRY" | "WET" | "DORMANT" | "ERUPTING" | "CONTINUOUS";
}