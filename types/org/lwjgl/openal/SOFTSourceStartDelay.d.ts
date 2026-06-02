import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTSourceStartDelay extends Object {
    static alSourcePlayAtTimeDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static alSourcePlayAtTimeSOFT(paramarg0: number, paramarg1: number): void;
    static alSourcePlayAtTimevDirectSOFT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alSourcePlayAtTimevDirectSOFT(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static alSourcePlayAtTimevSOFT(paramarg0: number[], paramarg1: number): void;
    static alSourcePlayAtTimevSOFT(paramarg0: IntBuffer, paramarg1: number): void;
    static nalSourcePlayAtTimevDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalSourcePlayAtTimevSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}