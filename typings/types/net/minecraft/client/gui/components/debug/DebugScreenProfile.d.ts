import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class DebugScreenProfile extends Enum<DebugScreenProfile> implements StringRepresentable {
    static CODEC: StringRepresentable$EnumCodec<DebugScreenProfile>;
    static DEFAULT: DebugScreenProfile;
    static PERFORMANCE: DebugScreenProfile;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DebugScreenProfile;
    static values(): DebugScreenProfile[];
    private constructor(name: string, translationKey: string)
    // private name: string;
    // private translationKey: string;
    getSerializedName(): string;
    translationKey(): string;
    name(): "DEFAULT" | "PERFORMANCE";
}