import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoProperties } from '../../../net/minecraft/gizmos/GizmoProperties.d.ts'
export interface GizmoCollector extends Object{
    add(gizmo: Gizmo): GizmoProperties;
}