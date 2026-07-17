import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TelemetryProperty$GameMode extends Enum<TelemetryProperty$GameMode> implements StringRepresentable {
    static ADVENTURE: TelemetryProperty$GameMode;
    static CODEC: Codec<TelemetryProperty$GameMode>;
    static CREATIVE: TelemetryProperty$GameMode;
    static HARDCORE: TelemetryProperty$GameMode;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SPECTATOR: TelemetryProperty$GameMode;
    static SURVIVAL: TelemetryProperty$GameMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TelemetryProperty$GameMode;
    static values(): TelemetryProperty$GameMode[];
    private constructor(key: string, id: number)
    // private id: number;
    // private key: string;
    getSerializedName(): string;
    id(): number;
    name(): "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR" | "HARDCORE";
}