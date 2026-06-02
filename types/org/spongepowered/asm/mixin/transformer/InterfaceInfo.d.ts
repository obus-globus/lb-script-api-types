import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export class InterfaceInfo extends Object {
    private constructor(arg0: MixinInfo, arg1: string, arg2: Type, arg3: boolean)
    // private iface: Type;
    // private methods: string[];
    // private mixin: MixinInfo;
    // private prefix: string;
    // private unique: boolean;
    // private decorateUniqueMethod(arg0: MethodNode): void;
    equals(arg0: Object | null): boolean;
    getInternalName(): string;
    getName(): string;
    hashCode(): number;
    // private initMethods(): void;
    // private readInterface(arg0: string): void;
    renameMethod(arg0: MethodNode): boolean;
}