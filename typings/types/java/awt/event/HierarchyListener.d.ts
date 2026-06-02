import type { HierarchyEvent } from '../../../java/awt/event/HierarchyEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HierarchyListener extends EventListener, Object{
    hierarchyChanged(arg0: HierarchyEvent): void;
}