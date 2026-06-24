import type { Constructor$ConstructMapping } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor$ConstructMapping.d.ts'
import type { CompactConstructor } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/extensions/compactnotation/CompactConstructor.d.ts'
import type { Node } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CompactConstructor$ConstructCompactObject extends Constructor$ConstructMapping {
    constructor(null_: CompactConstructor)
    construct(arg0: Node): Object;
    construct2ndStep(arg0: Node, arg1: Object): void;
}