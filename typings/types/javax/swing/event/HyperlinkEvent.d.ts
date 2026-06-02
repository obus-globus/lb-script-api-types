import type { InputEvent } from '../../../java/awt/event/InputEvent.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { HyperlinkEvent$EventType } from '../../../javax/swing/event/HyperlinkEvent$EventType.d.ts'
import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HyperlinkEvent extends EventObject {
    constructor(arg0: Object, arg1: HyperlinkEvent$EventType, arg2: URL)
    constructor(arg0: Object, arg1: HyperlinkEvent$EventType, arg2: URL, arg3: string)
    constructor(arg0: Object, arg1: HyperlinkEvent$EventType, arg2: URL, arg3: string, arg4: Element)
    constructor(arg0: Object, arg1: HyperlinkEvent$EventType, arg2: URL, arg3: string, arg4: Element, arg5: InputEvent)
    // private desc: string;
    readonly inputEvent: InputEvent;
    readonly sourceElement: Element;
    // private type: HyperlinkEvent$EventType;
    // private u: URL;
    getDescription(): string;
    getEventType(): HyperlinkEvent$EventType;
    getInputEvent(): InputEvent;
    getSourceElement(): Element;
    getURL(): URL;
}