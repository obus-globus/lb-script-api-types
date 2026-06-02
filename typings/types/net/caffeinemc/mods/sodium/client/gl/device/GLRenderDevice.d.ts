import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { DrawCommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/DrawCommandList.d.ts'
import type { RenderDevice } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
import type { DeviceFunctions } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/functions/DeviceFunctions.d.ts'
import type { GlStateTracker } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/state/GlStateTracker.d.ts'
import type { GlTessellation } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlTessellation.d.ts'
import type { GLCapabilities } from '../../../../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class GLRenderDevice extends Object implements RenderDevice {
    static INSTANCE: RenderDevice;
    static enterManagedCode(): void;
    static exitManagedCode(): void;
    constructor()
    // private activeTessellation: GlTessellation;
    // private commandList: CommandList;
    // private drawCommandList: DrawCommandList;
    // private functions: DeviceFunctions;
    // private isActive: boolean;
    // private stateTracker: GlStateTracker;
    // private checkDeviceActive(): void;
    createCommandList(): CommandList;
    getCapabilities(): GLCapabilities;
    getDeviceFunctions(): DeviceFunctions;
    getSubTexelPrecisionBits(): number;
    makeActive(): void;
    makeInactive(): void;
}