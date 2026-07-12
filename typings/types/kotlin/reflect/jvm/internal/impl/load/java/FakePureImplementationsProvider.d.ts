import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class FakePureImplementationsProvider extends Object {
    static INSTANCE: FakePureImplementationsProvider;
    private constructor()
    // private fqNameListOf(...arg0: string[]): ClassId[];
    getPurelyImplementedInterface(arg0: ClassId): ClassId;
    getPurelyImplementedInterface(arg0: FqName): FqName;
    // private implementedWith(arg0: ClassId, arg1: ClassId[]): void;
}