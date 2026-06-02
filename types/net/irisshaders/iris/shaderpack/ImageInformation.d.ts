import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalTextureFormat } from '../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { TextureType } from '../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class ImageInformation extends Record {
    // private clear: boolean;
    // private depth: number;
    // private format: PixelFormat;
    // private height: number;
    // private internalTextureFormat: InternalTextureFormat;
    // private isRelative: boolean;
    // private name: string;
    // private relativeHeight: number;
    // private relativeWidth: number;
    // private samplerName: string;
    // private target: TextureType;
    // private type: PixelType;
    // private width: number;
    clear(): boolean;
    depth(): number;
    equals(arg0: Object | null): boolean;
    format(): PixelFormat;
    hashCode(): number;
    height(): number;
    internalTextureFormat(): InternalTextureFormat;
    isRelative(): boolean;
    name(): string;
    relativeHeight(): number;
    relativeWidth(): number;
    samplerName(): string;
    target(): TextureType;
    toString(): string;
    type(): PixelType;
    width(): number;
}