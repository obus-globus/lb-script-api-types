import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassSignature$Token } from '../../../../org/spongepowered/asm/util/ClassSignature$Token.d.ts'
import type { ClassSignature$TokenHandle } from '../../../../org/spongepowered/asm/util/ClassSignature$TokenHandle.d.ts'
import type { ClassSignature$TypeVar } from '../../../../org/spongepowered/asm/util/ClassSignature$TypeVar.d.ts'
export class ClassSignature extends Object {
    static of(paramarg0: string): ClassSignature;
    static of(paramarg0: ClassNode): ClassSignature;
    static ofLazy(paramarg0: ClassNode): ClassSignature;
    constructor()
    // private interfaces: ClassSignature$Token[];
    // private rawInterfaces: string[];
    readonly superClass: ClassSignature$Token;
    // private types: Map<ClassSignature$TypeVar, ClassSignature$TokenHandle>;
    addInterface(arg0: string): void;
    addInterface(arg0: ClassSignature$Token): void;
    addRawInterface(arg0: string): void;
    addTypeVar(arg0: ClassSignature$TypeVar, arg1: ClassSignature$TokenHandle): void;
    // private conform(arg0: string[]): void;
    // private findOffsetName(arg0: string, arg1: string[]): string;
    // private findOffsetName(arg0: string, arg1: string[], arg2: string, arg3: string): string;
    // private findUniqueName(arg0: string, arg1: string[]): string;
    getRemapper(): SignatureVisitor;
    getSuperClass(): string;
    getType(arg0: string): ClassSignature$TokenHandle;
    getTypeVar(arg0: string): ClassSignature$TypeVar;
    getTypeVar(arg0: ClassSignature$TokenHandle): string;
    merge(arg0: ClassSignature): void;
    // private read(arg0: string): ClassSignature;
    setSuperClass(arg0: ClassSignature$Token): void;
    toString(): string;
    wake(): ClassSignature;
}