import type { TruffleFromLibGraal } from '../../../../../../com/oracle/truffle/compiler/hotspot/libgraal/TruffleFromLibGraal.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TruffleFromLibGraalRepeated extends Annotation, Object{
    constructor(...value: TruffleFromLibGraal[])
    /*not mapped: */ value(): TruffleFromLibGraal[];
}