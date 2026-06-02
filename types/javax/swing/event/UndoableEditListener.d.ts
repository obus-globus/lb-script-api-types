import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { UndoableEditEvent } from '../../../javax/swing/event/UndoableEditEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface UndoableEditListener extends EventListener, Object{
    undoableEditHappened(arg0: UndoableEditEvent): void;
}