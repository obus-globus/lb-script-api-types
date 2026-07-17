import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ValueGetter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/ValueGetter.d.ts'
import type { ClickEvent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DialogAction extends Object{
    toAction(arg0: JavaMap<string, ValueGetter>): ClickEvent;
}