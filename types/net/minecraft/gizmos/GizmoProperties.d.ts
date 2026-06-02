import type { Object } from '../../../java/lang/Object.d.ts'
export interface GizmoProperties extends Object{
    fadeOut(): GizmoProperties;
    persistForMillis(milliseconds: number): GizmoProperties;
    setAlwaysOnTop(): GizmoProperties;
}