import type { Monitor } from '../../../../com/mojang/blaze3d/platform/Monitor.d.ts'
import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MonitorManager extends Object implements AutoCloseable {
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    constructor()
    // private monitors: { [key: string]: any };
    close(): void;
    findBestMonitor(window: Window): Monitor;
    getMonitor(monitor: number): Monitor;
    // private onMonitorChange(monitorHandle: number, event: number): void;
}