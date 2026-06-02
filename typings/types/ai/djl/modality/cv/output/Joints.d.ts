import type { Joints$Joint } from '../../../../../ai/djl/modality/cv/output/Joints$Joint.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Joints extends Object implements Serializable {
    constructor(arg0: Joints$Joint[])
    readonly joints: Joints$Joint[];
    getJoints(): Joints$Joint[];
    toString(): string;
}