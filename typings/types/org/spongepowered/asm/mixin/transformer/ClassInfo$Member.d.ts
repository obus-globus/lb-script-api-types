import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Member$Type } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member$Type.d.ts'
export abstract class ClassInfo$Member extends Object {
    constructor(arg0: ClassInfo$Member)
    constructor(arg0: ClassInfo$Member$Type, arg1: string, arg2: string, arg3: number)
    constructor(arg0: ClassInfo$Member$Type, arg1: string, arg2: string, arg3: number, arg4: boolean)
    // private currentDesc: string;
    // private currentName: string;
    readonly decoratedFinal: boolean;
    readonly decoratedMutable: boolean;
    // private isInjected: boolean;
    // private memberDesc: string;
    // private memberName: string;
    // private modifiers: number;
    // private type: ClassInfo$Member$Type;
    readonly unique: boolean;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    getAccess(): number;
    getDesc(): string;
    getDisplayFormat(): string;
    getImplementor(): ClassInfo;
    getName(): string;
    getOriginalDesc(): string;
    getOriginalName(): string;
    getOwner(): ClassInfo;
    hashCode(): number;
    isAbstract(): boolean;
    isDecoratedFinal(): boolean;
    isDecoratedMutable(): boolean;
    isFinal(): boolean;
    isInjected(): boolean;
    isPrivate(): boolean;
    isRemapped(): boolean;
    isRenamed(): boolean;
    isStatic(): boolean;
    isSynthetic(): boolean;
    isUnique(): boolean;
    matchesFlags(arg0: number): boolean;
    remapTo(arg0: string): string;
    renameTo(arg0: string): string;
    setDecoratedFinal(arg0: boolean, arg1: boolean): void;
    setUnique(arg0: boolean): void;
    toString(): string;
}