import type { ImmutableList$Builder } from '../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ImageBinding } from '../../../../../net/irisshaders/iris/gl/image/ImageBinding.d.ts'
import type { ImageHolder } from '../../../../../net/irisshaders/iris/gl/image/ImageHolder.d.ts'
import type { GlUniform1iCall } from '../../../../../net/irisshaders/iris/gl/program/GlUniform1iCall.d.ts'
import type { ProgramImages } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
export class ProgramImages$Builder extends Object implements ImageHolder {
    private constructor(arg0: number)
    // private calls: GlUniform1iCall[];
    // private images: ImmutableList$Builder<ImageBinding>;
    // private maxImageUnits: number;
    // private nextImageUnit: number;
    // private program: number;
    addTextureImage(arg0: () => kotlin.Int, arg1: InternalTextureFormat, arg2: string): void;
    build(): ProgramImages;
    hasImage(arg0: string): boolean;
}