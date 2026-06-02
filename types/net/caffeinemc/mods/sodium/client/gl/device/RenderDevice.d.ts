import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { DeviceFunctions } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/functions/DeviceFunctions.d.ts'
import type { GLCapabilities } from '../../../../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export interface RenderDevice extends Object{
    createCommandList(): CommandList;
    getCapabilities(): GLCapabilities;
    getDeviceFunctions(): DeviceFunctions;
    getSubTexelPrecisionBits(): number;
    makeActive(): void;
    makeInactive(): void;
}