import type { Object } from '../../../java/lang/Object.d.ts'
import type { ALCapabilities } from '../../../org/lwjgl/openal/ALCapabilities.d.ts'
export interface AL$ICD extends Object{
    get(): ALCapabilities;
    set(arg0: ALCapabilities): void;
}