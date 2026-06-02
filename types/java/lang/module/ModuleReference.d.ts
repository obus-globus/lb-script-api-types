import type { ModuleDescriptor } from '../../../java/lang/module/ModuleDescriptor.d.ts'
import type { ModuleReader } from '../../../java/lang/module/ModuleReader.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ModuleReference extends Object {
    constructor(arg0: ModuleDescriptor, arg1: URI)
    // private descriptor: ModuleDescriptor;
    // private location: URI;
    descriptor(): ModuleDescriptor;
    location(): Optional<URI>;
    open(): ModuleReader;
}