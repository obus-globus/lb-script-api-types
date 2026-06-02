import type { Monitor } from '../../../../com/mojang/blaze3d/platform/Monitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MonitorCreator extends Object{
    createMonitor(monitor: number): Monitor;
}