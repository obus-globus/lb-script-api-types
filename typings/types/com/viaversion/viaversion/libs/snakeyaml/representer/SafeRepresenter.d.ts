import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { DumperOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions.d.ts'
import type { DumperOptions$NonPrintableStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$NonPrintableStyle.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { BaseRepresenter } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/BaseRepresenter.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { TimeZone } from '../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SafeRepresenter extends BaseRepresenter {
    constructor(arg0: DumperOptions)
    // private classTags: JavaMap<Class<Object>, Tag>;
    // private nonPrintableStyle: DumperOptions$NonPrintableStyle;
    timeZone: TimeZone;
    addClassTag(arg0: Class<Object>, arg1: Tag): Tag;
    getTag(arg0: Class<Object>, arg1: Tag): Tag;
    getTimeZone(): TimeZone;
    setTimeZone(arg0: TimeZone): void;
}