import type { Monitor } from '../../../../com/mojang/blaze3d/platform/Monitor.d.ts'
import type { MonitorCreator } from '../../../../com/mojang/blaze3d/platform/MonitorCreator.d.ts'
import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScreenManager extends Object {
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    constructor(monitorCreator: MonitorCreator)
    // private monitorCreator: MonitorCreator;
    // private monitors: Long2ObjectMap<Monitor>;
    findBestMonitor(window: Window): Monitor;
    getMonitor(monitor: number): Monitor;
    // private onMonitorChange(monitor: number, event: number): void;
    shutdown(): void;
}