import type { VertexFormat } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../../../../../org/joml/Matrix4f.d.ts'
export class ColorVertex extends Object {
    static FORMAT: VertexFormat;
    static STRIDE: number;
    static put(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static put(paramarg0: number, paramarg1: Matrix4f, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}