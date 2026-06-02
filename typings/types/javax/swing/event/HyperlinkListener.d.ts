import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { HyperlinkEvent } from '../../../javax/swing/event/HyperlinkEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HyperlinkListener extends EventListener, Object{
    hyperlinkUpdate(arg0: HyperlinkEvent): void;
}