import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
export abstract class ClassContext extends Object {
    constructor()
    // private upgradedMethods: ClassInfo$Method[];
    addUpgradedMethod(arg0: MethodNode): void;
    getClassInfo(): ClassInfo;
    getClassNode(): ClassNode;
    getClassRef(): string;
    // private upgradeMethod(arg0: MethodNode): void;
    upgradeMethodRef(arg0: MethodNode, arg1: MemberRef, arg2: ClassInfo$Method): void;
    upgradeMethods(): void;
}