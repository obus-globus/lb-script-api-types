import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export abstract class Remapper extends Object {
    constructor()
    constructor(arg0: number)
    // private api: number;
    createRemappingSignatureAdapter(arg0: SignatureVisitor): SignatureVisitor;
    createSignatureRemapper(arg0: SignatureVisitor): SignatureVisitor;
    map(arg0: string): string;
    mapAnnotationAttributeName(arg0: string, arg1: string): string;
    mapDesc(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapInnerClassName(arg0: string, arg1: string, arg2: string): string;
    mapInvokeDynamicMethodName(arg0: string, arg1: string): string;
    mapInvokeDynamicMethodName(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): string;
    mapMethodDesc(arg0: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    mapModuleName(arg0: string): string;
    mapPackageName(arg0: string): string;
    mapRecordComponentName(arg0: string, arg1: string, arg2: string): string;
    mapSignature(arg0: string, arg1: boolean): string;
    mapType(arg0: string): string;
    // private mapType(arg0: Type): Type;
    mapTypes(arg0: string[]): string[];
    mapValue(arg0: Object): Object;
}