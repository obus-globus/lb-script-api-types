import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Raid$RaidStatus extends Enum<Raid$RaidStatus> implements StringRepresentable {
    static CODEC: Codec<Raid$RaidStatus>;
    static LOSS: Raid$RaidStatus;
    static ONGOING: Raid$RaidStatus;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STOPPED: Raid$RaidStatus;
    static VICTORY: Raid$RaidStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Raid$RaidStatus;
    static values(): Raid$RaidStatus[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "ONGOING" | "VICTORY" | "LOSS" | "STOPPED";
}