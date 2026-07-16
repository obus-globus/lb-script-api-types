import type { Std140Builder } from '../../../../com/mojang/blaze3d/buffers/Std140Builder.d.ts'
import type { Std140SizeCalculator } from '../../../../com/mojang/blaze3d/buffers/Std140SizeCalculator.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformValue } from '../../../../net/minecraft/client/renderer/UniformValue.d.ts'
import type { UniformValue$Type } from '../../../../net/minecraft/client/renderer/UniformValue$Type.d.ts'
export class UniformValue$IntUniform extends Record implements UniformValue {
    static CODEC: Codec<UniformValue$IntUniform>;
    constructor(value: number)
    // private value: number;
    addSize(calculator: Std140SizeCalculator): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): UniformValue$Type;
    value(): number;
    writeTo(builder: Std140Builder): void;
}