import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class EventResult extends Enum<EventResult> implements StringRepresentable {
    static ALLOW: EventResult;
    static CODEC: Codec<EventResult>;
    static DENY: EventResult;
    static PASS: EventResult;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EventResult;
    static values(): EventResult[];
    private constructor(arg2: string)
    // private name: string;
    allowAction(): boolean;
    allowAction(arg0: boolean): boolean;
    getSerializedName(): string;
    name(): "ALLOW" | "PASS" | "DENY";
}