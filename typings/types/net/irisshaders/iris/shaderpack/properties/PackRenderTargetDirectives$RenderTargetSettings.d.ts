import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class PackRenderTargetDirectives$RenderTargetSettings extends Object {
    constructor()
    // private clear: boolean;
    readonly clearColor: Vector4f;
    // private requestedFormat: InternalTextureFormat;
    getClearColor(): Optional<Vector4f>;
    getInternalFormat(): InternalTextureFormat;
    shouldClear(): boolean;
    toString(): string;
}