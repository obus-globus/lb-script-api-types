import type { FramerateLimitTracker$FramerateThrottleReason } from '../../../../com/mojang/blaze3d/platform/FramerateLimitTracker$FramerateThrottleReason.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
export class FramerateLimitTracker extends Object {
    constructor(options: Options, minecraft: Minecraft)
    readonly framerateLimit: number;
    // private latestInputTime: number;
    // private minecraft: Minecraft;
    // private options: Options;
    getFramerateLimit(): number;
    getThrottleReason(): FramerateLimitTracker$FramerateThrottleReason;
    isHeavilyThrottled(): boolean;
    onInputReceived(): void;
    setFramerateLimit(value: number): void;
}