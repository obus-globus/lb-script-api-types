import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
import type { Diff } from '../../../../../org/apache/commons/lang3/builder/Diff.d.ts'
import type { DiffBuilder } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder.d.ts'
import type { ReflectionDiffBuilder$Builder } from '../../../../../org/apache/commons/lang3/builder/ReflectionDiffBuilder$Builder.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class ReflectionDiffBuilder<T extends unknown> extends Object implements Builder<Diff<Object>[]> {
    static builder(): ReflectionDiffBuilder$Builder<Object>;
    constructor(arg0: T, arg1: T, arg2: ToStringStyle)
    constructor(arg0: DiffBuilder<Object>, arg1: string[], arg2: any)
    // private diffBuilder: DiffBuilder<T>;
    readonly excludeFieldNames: string[];
    // private accept(arg0: Field): boolean;
    // private appendFields(arg0: Class<Object>): void;
    build(): Diff<Object>[];
    getExcludeFieldNames(): string[];
    // private getLeft(): T;
    // private getRight(): T;
    // private readField(arg0: Field, arg1: Object): Object;
    setExcludeFieldNames(...arg0: string[]): ReflectionDiffBuilder<T>;
}