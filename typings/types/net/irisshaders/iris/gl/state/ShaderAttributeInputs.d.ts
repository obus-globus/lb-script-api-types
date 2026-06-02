import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShaderAttributeInputs extends Object {
    constructor(arg0: VertexFormat, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean)
    constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
    // private color: boolean;
    readonly glint: boolean;
    // private ie: boolean;
    // private light: boolean;
    readonly newLines: boolean;
    // private normal: boolean;
    // private overlay: boolean;
    // private tex: boolean;
    readonly text: boolean;
    equals(arg0: Object | null): boolean;
    hasColor(): boolean;
    hasLight(): boolean;
    hasNormal(): boolean;
    hasOverlay(): boolean;
    hasTex(): boolean;
    hashCode(): number;
    isGlint(): boolean;
    isIE(): boolean;
    isNewLines(): boolean;
    isText(): boolean;
}