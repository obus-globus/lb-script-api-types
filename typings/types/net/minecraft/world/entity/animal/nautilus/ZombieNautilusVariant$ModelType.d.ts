import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ZombieNautilusVariant$ModelType extends Enum<ZombieNautilusVariant$ModelType> implements StringRepresentable {
    static CODEC: Codec<ZombieNautilusVariant$ModelType>;
    static NORMAL: ZombieNautilusVariant$ModelType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WARM: ZombieNautilusVariant$ModelType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ZombieNautilusVariant$ModelType;
    static values(): ZombieNautilusVariant$ModelType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NORMAL" | "WARM";
}