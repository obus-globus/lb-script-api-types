import type { Control$Type } from '../../../javax/sound/sampled/Control$Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Control extends Object {
    constructor(arg0: Control$Type)
    readonly type: Control$Type;
    getType(): Control$Type;
    toString(): string;
}