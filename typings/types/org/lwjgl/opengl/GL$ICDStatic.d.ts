import type { Object } from '../../../java/lang/Object.d.ts'
import type { GL$ICD } from '../../../org/lwjgl/opengl/GL$ICD.d.ts'
import type { GLCapabilities } from '../../../org/lwjgl/opengl/GLCapabilities.d.ts'
import type { SharedLibrary$Delegate } from '../../../org/lwjgl/system/SharedLibrary$Delegate.d.ts'
export class GL$ICDStatic extends Object implements GL$ICD {
    constructor(arg0: SharedLibrary$Delegate)
    get(): GLCapabilities;
    set(arg0: GLCapabilities): void;
}