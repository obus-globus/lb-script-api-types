import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { UniformValue } from '../../../../net/minecraft/client/renderer/UniformValue.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class UniformValue$Type extends Enum<UniformValue$Type> implements StringRepresentable {
    static CODEC: Codec<UniformValue$Type>;
    static FLOAT: UniformValue$Type;
    static INT: UniformValue$Type;
    static IVEC3: UniformValue$Type;
    static MATRIX4X4: UniformValue$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static VEC2: UniformValue$Type;
    static VEC3: UniformValue$Type;
    static VEC4: UniformValue$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UniformValue$Type;
    static values(): UniformValue$Type[];
    private constructor(name: string, valueCodec: Codec<UniformValue>)
    // private name: string;
    // private valueCodec: MapCodec<UniformValue>;
    getSerializedName(): string;
    name(): "INT" | "IVEC3" | "FLOAT" | "VEC2" | "VEC3" | "VEC4" | "MATRIX4X4";
}