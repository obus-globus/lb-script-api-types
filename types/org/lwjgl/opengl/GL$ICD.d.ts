import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLCapabilities } from '../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export interface GL$ICD extends Object{
    get(): GLCapabilities;
    set(arg0: GLCapabilities): void;
}