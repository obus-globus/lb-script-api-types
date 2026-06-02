import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlendMode } from '../../../../../net/irisshaders/iris/gl/blending/BlendMode.d.ts'
export class BlendModeStorage extends Object {
    static deferBlendFunc(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static deferBlendModeToggle(paramarg0: boolean): void;
    static isBlendLocked(): boolean;
    static isBlendUnknown(): boolean;
    static overrideBlend(paramarg0: BlendMode): void;
    static overrideBufferBlend(paramarg0: number, paramarg1: BlendMode): void;
    static restoreBlend(): void;
    constructor()
}