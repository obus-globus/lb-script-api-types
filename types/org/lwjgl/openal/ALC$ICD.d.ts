import type { Object } from '../../../java/lang/Object.d.ts'
import type { ALCCapabilities } from '../../../org/lwjgl/openal/ALCCapabilities.d.ts'
export interface ALC$ICD extends Object{
    get(): ALCCapabilities;
    set(arg0: ALCCapabilities): void;
}