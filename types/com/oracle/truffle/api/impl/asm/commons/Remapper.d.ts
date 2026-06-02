import type { Type } from '../../../../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { SignatureVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/signature/SignatureVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Remapper extends Object {
    constructor()
    createRemappingSignatureAdapter(signatureVisitor: SignatureVisitor): SignatureVisitor;
    createSignatureRemapper(signatureVisitor: SignatureVisitor): SignatureVisitor;
    map(internalName: string): string;
    mapAnnotationAttributeName(descriptor: string, name: string): string;
    mapDesc(descriptor: string): string;
    mapFieldName(owner: string, name: string, descriptor: string): string;
    mapInnerClassName(name: string, ownerName: string, innerName: string): string;
    mapInvokeDynamicMethodName(name: string, descriptor: string): string;
    mapMethodDesc(methodDescriptor: string): string;
    mapMethodName(owner: string, name: string, descriptor: string): string;
    mapModuleName(name: string): string;
    mapPackageName(name: string): string;
    mapRecordComponentName(owner: string, name: string, descriptor: string): string;
    mapSignature(signature: string, typeSignature: boolean): string;
    // private mapType(type: Type): Type;
    mapType(internalName: string): string;
    mapTypes(internalNames: string[]): string[];
    mapValue(value: Object): Object;
}