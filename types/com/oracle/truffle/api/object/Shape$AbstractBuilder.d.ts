import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Shape$AbstractBuilder<T extends Shape$AbstractBuilder<T>> extends Object {
    constructor()
    addConstantProperty(key: Object, value: Object, flags: number): T;
    dynamicType(dynamicType: Object): T;
    shapeFlags(flags: number): T;
}