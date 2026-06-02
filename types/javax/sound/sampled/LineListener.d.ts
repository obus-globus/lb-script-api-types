import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { LineEvent } from '../../../javax/sound/sampled/LineEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface LineListener extends EventListener, Object{
    update(arg0: LineEvent): void;
}