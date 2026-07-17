import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class TriState extends Enum<TriState> implements StringRepresentable {
    static CODEC: Codec<TriState>;
    static DEFAULT: TriState;
    static FALSE: TriState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TRUE: TriState;
    static from(paramvalue: boolean): TriState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TriState;
    static values(): TriState[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toBoolean(defaultValue: boolean): boolean;
    name(): "TRUE" | "FALSE" | "DEFAULT";
}