import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface MixinRenamed extends Annotation, Object{
    constructor(isInterfaceMember: boolean, originalName: string)
    /*not mapped: */ isInterfaceMember(): boolean;
    /*not mapped: */ originalName(): string;
}