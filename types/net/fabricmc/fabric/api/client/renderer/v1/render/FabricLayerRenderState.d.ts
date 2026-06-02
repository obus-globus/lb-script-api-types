import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
export interface FabricLayerRenderState extends Object{
    emitter(): QuadEmitter;
}