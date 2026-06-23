import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
import type { Diff } from '../../../../../org/apache/commons/lang3/builder/Diff.d.ts'
import type { DiffBuilder$Builder } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder$Builder.d.ts'
import type { DiffBuilder$SerializableSupplier } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder$SerializableSupplier.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class DiffBuilder<T extends unknown> extends Object implements Builder<Diff<Object>[]> {
    static builder(): DiffBuilder$Builder<Object>;
    constructor(arg0: T, arg1: T, arg2: ToStringStyle)
    constructor(arg0: T, arg1: T, arg2: ToStringStyle, arg3: boolean)
    private constructor(arg0: T, arg1: T, arg2: ToStringStyle, arg3: boolean, arg4: string)
    // private diffs: Diff<Object>[];
    // private equals: boolean;
    // private left: T;
    // private right: T;
    // private style: ToStringStyle;
    // private toStringFormat: string;
    // private add<F extends unknown>(arg0: string, arg1: DiffBuilder$SerializableSupplier<F>, arg2: DiffBuilder$SerializableSupplier<F>, arg3: Class<F>): DiffBuilder<T>;
    append(arg0: string, arg1: Object, arg2: Object): DiffBuilder<T>;
    append(arg0: string, arg1: Object[], arg2: Object[]): DiffBuilder<T>;
    append(arg0: string, arg1: boolean, arg2: boolean): DiffBuilder<T>;
    append(arg0: string, arg1: (Object | null)[], arg2: (Object | null)[]): DiffBuilder<T>;
    append(arg0: string, arg1: number, arg2: number): DiffBuilder<T>;
    append(arg0: string, arg1: number[], arg2: number[]): DiffBuilder<T>;
    append(arg0: string, arg1: string, arg2: string): DiffBuilder<T>;
    append(arg0: string, arg1: string[], arg2: string[]): DiffBuilder<T>;
    append(arg0: string, arg1: Diff<Object>[]): DiffBuilder<T>;
    build(): Diff<Object>[];
    getLeft(): T;
    getRight(): T;
}