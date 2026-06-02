import type { InputMethodEvent } from '../../../java/awt/event/InputMethodEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface InputMethodListener extends EventListener, Object{
    caretPositionChanged(arg0: InputMethodEvent): void;
    inputMethodTextChanged(arg0: InputMethodEvent): void;
}