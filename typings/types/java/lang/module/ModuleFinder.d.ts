import type { ModuleReference } from '../../../java/lang/module/ModuleReference.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ModuleFinder extends Object{
    find(arg0: string): Optional<ModuleReference>;
    findAll(): ModuleReference[];
}