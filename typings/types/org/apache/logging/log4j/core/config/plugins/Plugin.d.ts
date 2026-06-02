import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Plugin extends Annotation, Object{
    constructor(category: string, deferChildren: boolean, elementType: string, name: string, printObject: boolean)
    /*not mapped: */ category(): string;
    /*not mapped: */ deferChildren(): boolean;
    /*not mapped: */ elementType(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ printObject(): boolean;
}