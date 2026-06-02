import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class PackShadowDirectives$SamplingSettings extends Object {
    constructor()
    readonly clear: boolean;
    readonly clearColor: Vector4f;
    readonly format: InternalTextureFormat;
    readonly mipmap: boolean;
    readonly nearest: boolean;
    getClear(): boolean;
    getClearColor(): Vector4f;
    getFormat(): InternalTextureFormat;
    getMipmap(): boolean;
    getNearest(): boolean;
    setClear(arg0: boolean): void;
    setClearColor(arg0: Vector4f): void;
    setFormat(arg0: InternalTextureFormat): void;
    setMipmap(arg0: boolean): void;
    setNearest(arg0: boolean): void;
    toString(): string;
}