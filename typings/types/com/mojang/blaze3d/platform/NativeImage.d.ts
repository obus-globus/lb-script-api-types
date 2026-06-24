import type { NativeImage$Format } from '../../../../com/mojang/blaze3d/platform/NativeImage$Format.d.ts'
import type { Transparency } from '../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { IntUnaryOperator } from '../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NativeImageAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/features/textures/NativeImageAccessor.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
export class NativeImage extends Object implements AutoCloseable, NativeImageAccessor {
    static read(parambytes: number[]): NativeImage;
    static read(paramformat: NativeImage$Format, paraminputStream: InputStream): NativeImage;
    static read(paramformat: NativeImage$Format, parambytes: ByteBuffer): NativeImage;
    static read(paraminputStream: InputStream): NativeImage;
    static read(parambytes: ByteBuffer): NativeImage;
    constructor(format: NativeImage$Format, width: number, height: number, zero: boolean)
    constructor(format: NativeImage$Format, width: number, height: number, useStbFree: boolean, pixels: number)
    constructor(width: number, height: number, zero: boolean)
    // private format: NativeImage$Format;
    readonly height: number;
    pixels: number;
    // private size: number;
    // private useStbFree: boolean;
    readonly width: number;
    // private checkAllocated(): void;
    close(): void;
    computeTransparency(): Transparency;
    computeTransparency(x0: number, y0: number, x1: number, y1: number): Transparency;
    copyFrom(from: NativeImage): void;
    copyFromFont(face: FT_Face, index: number): boolean;
    copyRect(target: NativeImage, sourceX: number, sourceY: number, targetX: number, targetY: number, sizeX: number, sizeY: number, swapX: boolean, swapY: boolean): void;
    copyRect(startX: number, startY: number, offsetX: number, offsetY: number, sizeX: number, sizeY: number, swapX: boolean, swapY: boolean): void;
    fillRect(xs: number, ys: number, width: number, height: number, pixel: number): void;
    format(): NativeImage$Format;
    getHeight(): number;
    getLuminanceOrAlpha(x: number, y: number): number;
    getPixel(x: number, y: number): number;
    // private getPixelABGR(x: number, y: number): number;
    getPixelBytes(): ByteBuffer;
    getPixels(): number[];
    getPixelsABGR(): number[];
    getPointer(): number;
    getWidth(): number;
    isClosed(): boolean;
    // private isOutsideBounds(x: number, y: number): boolean;
    makePixelArray(): number[];
    mappedCopy(function_: (param0: number) => number): NativeImage;
    resizeSubRectTo(sourceX: number, sourceY: number, sizeX: number, sizeY: number, to: NativeImage): void;
    setPixel(x: number, y: number, pixel: number): void;
    setPixelABGR(x: number, y: number, pixel: number): void;
    sodium$getPixels(): number;
    toString(): string;
    untrack(): void;
    writeToChannel(output: WritableByteChannel): boolean;
    writeToFile(file: File): void;
    writeToFile(file: Path[]): void;
}