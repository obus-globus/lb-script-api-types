import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TelemetryProperty$ServerType extends Enum<TelemetryProperty$ServerType> implements StringRepresentable {
    static CODEC: Codec<TelemetryProperty$ServerType>;
    static LOCAL: TelemetryProperty$ServerType;
    static OTHER: TelemetryProperty$ServerType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REALM: TelemetryProperty$ServerType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TelemetryProperty$ServerType;
    static values(): TelemetryProperty$ServerType[];
    private constructor(key: string)
    // private key: string;
    getSerializedName(): string;
    name(): "REALM" | "LOCAL" | "OTHER";
}