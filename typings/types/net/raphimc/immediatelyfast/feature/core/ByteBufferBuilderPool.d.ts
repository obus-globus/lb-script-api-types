import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBufferBuilderPool extends Object {
    static borrowBufferBuilder(): ByteBufferBuilder;
    static getAllocatedBytes(): number;
    static getSize(): number;
    static onEndFrame(): void;
    static returnBufferBuilderSafe(paramarg0: ByteBufferBuilder): void;
    private constructor()
}