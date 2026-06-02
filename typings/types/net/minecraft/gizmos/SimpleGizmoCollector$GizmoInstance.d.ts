import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoProperties } from '../../../net/minecraft/gizmos/GizmoProperties.d.ts'
export class SimpleGizmoCollector$GizmoInstance extends Object implements GizmoProperties {
    private constructor(gizmo: Gizmo)
    readonly expireTimeMillis: number;
    // private gizmo: Gizmo;
    // private isAlwaysOnTop: boolean;
    // private shouldFadeOut: boolean;
    // private startTimeMillis: number;
    fadeOut(): GizmoProperties;
    getAlphaMultiplier(currentMillis: number): number;
    getExpireTimeMillis(): number;
    gizmo(): Gizmo;
    isAlwaysOnTop(): boolean;
    persistForMillis(milliseconds: number): GizmoProperties;
    setAlwaysOnTop(): GizmoProperties;
}