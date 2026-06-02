import type { IrisRenderSystem$DSAUnsupported } from '../../../../net/irisshaders/iris/gl/IrisRenderSystem$DSAUnsupported.d.ts'
export class IrisRenderSystem$DSAARB extends IrisRenderSystem$DSAUnsupported {
    constructor()
    bindTextureToUnit(arg0: number, arg1: number, arg2: number): void;
    blitFramebuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    bufferStorage(arg0: number, arg1: number[], arg2: number): number;
    clearBufferfv(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
    clearBufferiv(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
    clearBufferuiv(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
    copyTexSubImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    createBuffers(): number;
    createFramebuffer(): number;
    createTexture(arg0: number): number;
    drawBuffers(arg0: number, arg1: number[]): void;
    framebufferTexture2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    generateMipmaps(arg0: number, arg1: number): void;
    getTexParameteri(arg0: number, arg1: number, arg2: number): number;
    readBuffer(arg0: number, arg1: number): void;
    texParameterf(arg0: number, arg1: number, arg2: number, arg3: number): void;
    texParameteri(arg0: number, arg1: number, arg2: number, arg3: number): void;
    texParameteriv(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
}