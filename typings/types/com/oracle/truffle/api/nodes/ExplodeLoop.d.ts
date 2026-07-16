import type { ExplodeLoop$LoopExplosionKind } from '../../../../../com/oracle/truffle/api/nodes/ExplodeLoop$LoopExplosionKind.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExplodeLoop extends Annotation, Object{
    /*not mapped: */ kind(): ExplodeLoop$LoopExplosionKind;
}