import type { VideoMode } from '../../../../com/mojang/blaze3d/platform/VideoMode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Monitor extends Record {
    static tryCreate(parammonitor: number): Monitor;
    constructor(monitorName: string, monitor: number, videoModes: VideoMode[], currentMode: VideoMode, x: number, y: number)
    // private currentMode: VideoMode;
    // private monitor: number;
    // private monitorName: string;
    // private videoModes: VideoMode[];
    // private x: number;
    // private y: number;
    currentMode(): VideoMode;
    equals(o: Object | null): boolean;
    getPreferredVidMode(expectedMode: Optional<VideoMode>): VideoMode;
    hashCode(): number;
    indexOfMode(videoMode: VideoMode): number;
    mode(mode: number): VideoMode;
    modeCount(): number;
    monitor(): number;
    monitorName(): string;
    toString(): string;
    videoModes(): VideoMode[];
    x(): number;
    y(): number;
}