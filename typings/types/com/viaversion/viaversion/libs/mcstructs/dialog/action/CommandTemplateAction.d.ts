import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { DialogAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/DialogAction.d.ts'
import type { ValueGetter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/ValueGetter.d.ts'
import type { ParsedTemplate } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/template/ParsedTemplate.d.ts'
import type { ClickEvent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CommandTemplateAction extends Object implements DialogAction {
    constructor(arg0: ParsedTemplate)
    readonly template: ParsedTemplate;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getTemplate(): ParsedTemplate;
    hashCode(): number;
    setTemplate(arg0: ParsedTemplate): void;
    toAction(arg0: JavaMap<string, ValueGetter>): ClickEvent;
    toString(): string;
}