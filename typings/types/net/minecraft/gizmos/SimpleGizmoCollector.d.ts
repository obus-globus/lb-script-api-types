import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoCollector } from '../../../net/minecraft/gizmos/GizmoCollector.d.ts'
import type { GizmoProperties } from '../../../net/minecraft/gizmos/GizmoProperties.d.ts'
import type { SimpleGizmoCollector$GizmoInstance } from '../../../net/minecraft/gizmos/SimpleGizmoCollector$GizmoInstance.d.ts'
export class SimpleGizmoCollector extends Object implements GizmoCollector {
    static IGNORED: GizmoProperties;
    static NOOP: GizmoCollector;
    constructor()
    readonly gizmos: SimpleGizmoCollector$GizmoInstance[];
    // private temporaryGizmos: SimpleGizmoCollector$GizmoInstance[];
    add(gizmo: Gizmo): GizmoProperties;
    addTemporaryGizmos(gizmos: E[]): void;
    drainGizmos(): SimpleGizmoCollector$GizmoInstance[];
    getGizmos(): SimpleGizmoCollector$GizmoInstance[];
}