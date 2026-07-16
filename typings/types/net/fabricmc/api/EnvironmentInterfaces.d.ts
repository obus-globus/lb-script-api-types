import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EnvironmentInterface } from '../../../net/fabricmc/api/EnvironmentInterface.d.ts'
export interface EnvironmentInterfaces extends Annotation, Object{
    /*not mapped: */ value(): EnvironmentInterface[];
}