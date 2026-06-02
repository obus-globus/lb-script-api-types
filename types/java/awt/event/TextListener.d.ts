import type { TextEvent } from '../../../java/awt/event/TextEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TextListener extends EventListener, Object{
    textValueChanged(arg0: TextEvent): void;
}