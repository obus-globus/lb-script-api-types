import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DiffBuilder } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class DiffBuilder$Builder<T extends unknown> extends Object {
    constructor()
    // private left: T;
    // private right: T;
    // private style: ToStringStyle;
    // private testObjectsEquals: boolean;
    // private toStringFormat: string;
    build(): DiffBuilder<T>;
    setLeft(arg0: T): DiffBuilder$Builder<T>;
    setRight(arg0: T): DiffBuilder$Builder<T>;
    setStyle(arg0: ToStringStyle): DiffBuilder$Builder<T>;
    setTestObjectsEquals(arg0: boolean): DiffBuilder$Builder<T>;
    setToStringFormat(arg0: string): DiffBuilder$Builder<T>;
}