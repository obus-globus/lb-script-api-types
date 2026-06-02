import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
export interface FabricBlockModelRenderState extends Object{
    setupMesh(arg0: Matrix4fc, arg1: boolean): QuadEmitter;
}