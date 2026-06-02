import type { TypeMirror } from '../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export interface ITypeHandleProvider extends Object{
    getSimulatedHandle(arg0: string, arg1: TypeMirror): TypeHandle;
    getTypeHandle(arg0: Object): TypeHandle;
    getTypeHandle(arg0: string): TypeHandle;
}