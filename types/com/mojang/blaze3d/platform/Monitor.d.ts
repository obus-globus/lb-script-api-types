import type { VideoMode } from '../../../../com/mojang/blaze3d/platform/VideoMode.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Monitor extends Object {
    constructor(monitor: number)
    readonly currentMode: VideoMode;
    readonly monitor: number;
    // private videoModes: VideoMode[];
    readonly x: number;
    readonly y: number;
    getCurrentMode(): VideoMode;
    getMode(mode: number): VideoMode;
    getModeCount(): number;
    getMonitor(): number;
    getPreferredVidMode(expectedMode: Optional<VideoMode>): VideoMode;
    getVideoModeIndex(videoMode: VideoMode): number;
    getX(): number;
    getY(): number;
    refreshVideoModes(): void;
    toString(): string;
}