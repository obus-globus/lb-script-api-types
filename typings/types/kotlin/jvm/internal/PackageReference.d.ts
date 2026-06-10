import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClassBasedDeclarationContainer } from '../../../kotlin/jvm/internal/ClassBasedDeclarationContainer.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
export class PackageReference extends Object implements ClassBasedDeclarationContainer {
    constructor(jClass: Class<Object>, moduleName: string)
    // private jClass: Class<Object>;
    /*not mapped: */ getJClass(): Class<Object>;
    readonly members: KCallable<Object>[];
    // private moduleName: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}