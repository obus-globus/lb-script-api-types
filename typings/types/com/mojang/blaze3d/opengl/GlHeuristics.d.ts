import type { DeviceInfo } from '../../../../com/mojang/blaze3d/systems/DeviceInfo.d.ts'
import type { DeviceType } from '../../../../com/mojang/blaze3d/systems/DeviceType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLCapabilities } from '../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class GlHeuristics extends Object {
    constructor(deviceName: string)
    // private isAmd: boolean;
    // private isGlOnDx12: boolean;
    createDeviceInfo(capabilities: GLCapabilities, maxSupportedAnisotropy: number, enabledExtensions: string[]): DeviceInfo;
    // private guessDeviceType(renderer: string, vendor: string): DeviceType;
    isAmd(): boolean;
    isGlOnDx12(): boolean;
}