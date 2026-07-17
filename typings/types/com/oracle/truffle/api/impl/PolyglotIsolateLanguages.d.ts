import type { InternalResource$CPUArchitecture } from '../../../../../com/oracle/truffle/api/InternalResource$CPUArchitecture.d.ts'
import type { InternalResource$OS } from '../../../../../com/oracle/truffle/api/InternalResource$OS.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PolyglotIsolateLanguages extends Annotation, Object{
    /*not mapped: */ cpuArchitecture(): InternalResource$CPUArchitecture;
    /*not mapped: */ os(): InternalResource$OS;
    /*not mapped: */ value(): string[];
}