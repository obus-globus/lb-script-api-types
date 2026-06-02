import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../../../../org/joml/Matrix4fc.d.ts'
export class ChunkRenderMatrices extends Record {
    constructor(projection: Matrix4fc, modelView: Matrix4fc)
    // private modelView: Matrix4fc;
    // private projection: Matrix4fc;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modelView(): Matrix4fc;
    projection(): Matrix4fc;
    toString(): string;
}