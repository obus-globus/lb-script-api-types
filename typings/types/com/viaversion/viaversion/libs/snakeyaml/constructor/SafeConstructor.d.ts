import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { BaseConstructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/BaseConstructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { Logger } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/internal/Logger.d.ts'
import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { NodeTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeTuple.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class SafeConstructor extends BaseConstructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor(arg0: LoaderOptions)
    // private log: Logger;
    constructMapping2ndStep(arg0: MappingNode, arg1: JavaMap<Object, Object>): void;
    constructSet2ndStep(arg0: MappingNode, arg1: Object[]): void;
    // private createNumber(arg0: number, arg1: string, arg2: number): Number;
    flattenMapping(arg0: MappingNode): void;
    flattenMapping(arg0: MappingNode, arg1: boolean): void;
    // private mergeNode(arg0: MappingNode, arg1: boolean, arg2: JavaMap<Object, number>, arg3: NodeTuple[], arg4: boolean): NodeTuple[];
    processDuplicateKeys(arg0: MappingNode): void;
    processDuplicateKeys(arg0: MappingNode, arg1: boolean): void;
}