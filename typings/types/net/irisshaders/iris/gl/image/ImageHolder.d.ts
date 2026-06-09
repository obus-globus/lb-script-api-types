import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
export interface ImageHolder extends Object {
    addTextureImage(arg0: () => kotlin.Int, arg1: InternalTextureFormat, arg2: string): void;
    hasImage(arg0: string): boolean;
}