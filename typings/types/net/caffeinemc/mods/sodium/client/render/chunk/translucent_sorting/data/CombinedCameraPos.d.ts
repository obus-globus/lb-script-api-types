import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export interface CombinedCameraPos extends Object{
    getAbsoluteCameraPos(): Vector3dc;
    getRelativeCameraPos(): Vector3fc;
}