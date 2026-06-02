import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RenderSetup } from '../../../../net/minecraft/client/renderer/rendertype/RenderSetup.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export abstract class LightningHandler extends RenderType {
    static BIG_BUFFER_SIZE: number;
    static SMALL_BUFFER_SIZE: number;
    static TRANSIENT_BUFFER_SIZE: number;
    static create(paramname: string, paramstate: RenderSetup): RenderType;
    constructor(arg0: string, arg1: number, arg2: boolean, arg3: boolean, arg4: () => void, arg5: () => void)
}