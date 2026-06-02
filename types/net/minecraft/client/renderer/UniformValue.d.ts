import type { Std140Builder } from '../../../../com/mojang/blaze3d/buffers/Std140Builder.d.ts'
import type { Std140SizeCalculator } from '../../../../com/mojang/blaze3d/buffers/Std140SizeCalculator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformValue$Type } from '../../../../net/minecraft/client/renderer/UniformValue$Type.d.ts'
export interface UniformValue extends Object{
    addSize(calculator: Std140SizeCalculator): void;
    type(): UniformValue$Type;
    writeTo(builder: Std140Builder): void;
}