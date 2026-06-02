import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Represent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/Represent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SafeRepresenter$RepresentDate extends Object implements Represent {
    constructor(null_: SafeRepresenter$RepresentDate)
    getDefaultTag(): Tag;
    representData(arg0: Object): Node;
}