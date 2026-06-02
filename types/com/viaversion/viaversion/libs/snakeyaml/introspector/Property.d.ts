import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export abstract class Property extends Object implements Comparable<Property> {
    constructor(arg0: string, arg1: Class<Object>)
    readonly name: string;
    readonly type: Class<Object>;
    compareTo(arg0: Property): number;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): Object;
    getActualTypeArguments(): Class<Object>[];
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    getName(): string;
    getType(): Class<Object>;
    hashCode(): number;
    isReadable(): boolean;
    isWritable(): boolean;
    set(arg0: Object, arg1: Object): void;
    toString(): string;
}