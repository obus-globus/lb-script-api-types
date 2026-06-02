import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlendMode } from '../../../../../net/irisshaders/iris/gl/blending/BlendMode.d.ts'
export class BlendModeOverride extends Object {
    static OFF: BlendModeOverride;
    static restore(): void;
    constructor(arg0: BlendMode)
    // private blendMode: BlendMode;
    apply(): void;
}