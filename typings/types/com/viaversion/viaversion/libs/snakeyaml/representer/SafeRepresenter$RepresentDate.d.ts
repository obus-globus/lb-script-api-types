import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Represent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/Represent.d.ts'
import type { SafeRepresenter } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/SafeRepresenter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SafeRepresenter$RepresentDate extends Object implements Represent {
    constructor(null_: SafeRepresenter)
    getDefaultTag(): Tag;
    representData(arg0: Object): Node;
}