import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class BossEvent$BossBarOverlay extends Enum<BossEvent$BossBarOverlay> implements StringRepresentable {
    static CODEC: Codec<BossEvent$BossBarOverlay>;
    static NOTCHED_10: BossEvent$BossBarOverlay;
    static NOTCHED_12: BossEvent$BossBarOverlay;
    static NOTCHED_20: BossEvent$BossBarOverlay;
    static NOTCHED_6: BossEvent$BossBarOverlay;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static PROGRESS: BossEvent$BossBarOverlay;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BossEvent$BossBarOverlay;
    static values(): BossEvent$BossBarOverlay[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "PROGRESS" | "NOTCHED_6" | "NOTCHED_10" | "NOTCHED_12" | "NOTCHED_20";
}