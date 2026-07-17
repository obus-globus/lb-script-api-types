import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { DialogAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/DialogAction.d.ts'
import type { ValueGetter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/ValueGetter.d.ts'
import type { ClickEvent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StaticAction extends Object implements DialogAction {
    constructor(arg0: ClickEvent)
    readonly value: ClickEvent;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getValue(): ClickEvent;
    hashCode(): number;
    setValue(arg0: ClickEvent): void;
    toAction(arg0: JavaMap<string, ValueGetter>): ClickEvent;
    toString(): string;
}