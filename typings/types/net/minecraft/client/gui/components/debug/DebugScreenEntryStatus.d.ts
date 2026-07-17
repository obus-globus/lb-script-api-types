import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DebugScreenEntryStatus extends Enum<DebugScreenEntryStatus> implements StringRepresentable {
    static ALWAYS_ON: DebugScreenEntryStatus;
    static CODEC: Codec<DebugScreenEntryStatus>;
    static IN_OVERLAY: DebugScreenEntryStatus;
    static NEVER: DebugScreenEntryStatus;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DebugScreenEntryStatus;
    static values(): DebugScreenEntryStatus[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "ALWAYS_ON" | "IN_OVERLAY" | "NEVER";
}