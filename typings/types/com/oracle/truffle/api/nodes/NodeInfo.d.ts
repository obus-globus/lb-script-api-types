import type { NodeCost } from '../../../../../com/oracle/truffle/api/nodes/NodeCost.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NodeInfo extends Annotation, Object{
    /*not mapped: */ cost(): NodeCost;
    /*not mapped: */ description(): string;
    /*not mapped: */ language(): string;
    /*not mapped: */ shortName(): string;
}