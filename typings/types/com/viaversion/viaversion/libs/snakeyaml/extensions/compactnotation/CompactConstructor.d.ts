import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { LoaderOptions } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { Construct } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Construct.d.ts'
import type { Constructor } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { CompactData } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/extensions/compactnotation/CompactData.d.ts'
import type { Node } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { ScalarNode } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/ScalarNode.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CompactConstructor extends Constructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor()
    constructor(arg0: LoaderOptions)
    // private compactConstruct: Construct;
    applySequence(arg0: Object, arg1: (Object | null)[]): void;
    constructCompactFormat(arg0: ScalarNode, arg1: CompactData): Object;
    createCompactConstruct(): Construct;
    createInstance(arg0: ScalarNode, arg1: CompactData): Object;
    // private getCompactConstruct(): Construct;
    getCompactData(arg0: string): CompactData;
    getConstructor(arg0: Node): Construct;
    getSequencePropertyName(arg0: Class<Object>): string;
    setProperties(arg0: Object, arg1: JavaMap<string, Object>): void;
}