import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GizmoCollector } from '../../../net/minecraft/gizmos/GizmoCollector.d.ts'
export class Gizmos$TemporaryCollection extends Object implements AutoCloseable {
    private constructor()
    // private closed: boolean;
    // private old: GizmoCollector;
    close(): void;
}