import type { AbstractConstruct } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/AbstractConstruct.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Calendar } from '../../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SafeConstructor$ConstructYamlTimestamp extends AbstractConstruct {
    constructor()
    readonly calendar: Calendar;
    construct(arg0: Node): Object;
    getCalendar(): Calendar;
}