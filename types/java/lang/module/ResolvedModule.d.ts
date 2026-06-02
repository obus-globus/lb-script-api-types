import type { Configuration } from '../../../java/lang/module/Configuration.d.ts'
import type { ModuleDescriptor } from '../../../java/lang/module/ModuleDescriptor.d.ts'
import type { ModuleReference } from '../../../java/lang/module/ModuleReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ResolvedModule extends Object {
    constructor(arg0: Configuration, arg1: ModuleReference)
    // private cf: Configuration;
    // private mref: ModuleReference;
    configuration(): Configuration;
    descriptor(): ModuleDescriptor;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    reads(): ResolvedModule[];
    reference(): ModuleReference;
    toString(): string;
}