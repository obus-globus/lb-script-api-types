import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DiffBuilder } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder.d.ts'
import type { ReflectionDiffBuilder } from '../../../../../org/apache/commons/lang3/builder/ReflectionDiffBuilder.d.ts'
export class ReflectionDiffBuilder$Builder<T extends unknown> extends Object {
    constructor()
    // private diffBuilder: DiffBuilder<T>;
    // private excludeFieldNames: string[];
    build(): ReflectionDiffBuilder<T>;
    setDiffBuilder(arg0: DiffBuilder<T>): ReflectionDiffBuilder$Builder<T>;
    setExcludeFieldNames(arg0: string[]): ReflectionDiffBuilder$Builder<T>;
}