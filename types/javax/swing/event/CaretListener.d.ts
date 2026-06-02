import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { CaretEvent } from '../../../javax/swing/event/CaretEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CaretListener extends EventListener, Object{
    caretUpdate(arg0: CaretEvent): void;
}