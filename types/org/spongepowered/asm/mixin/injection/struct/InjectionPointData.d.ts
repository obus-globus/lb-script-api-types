import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IInjectionPointContext } from '../../../../../../org/spongepowered/asm/mixin/injection/IInjectionPointContext.d.ts'
import type { InjectionPoint$RestrictTargetLevel } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint$RestrictTargetLevel.d.ts'
import type { InjectionPoint$Specifier } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint$Specifier.d.ts'
import type { LocalVariableDiscriminator } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IMessageSink } from '../../../../../../org/spongepowered/asm/util/IMessageSink.d.ts'
export class InjectionPointData extends Object {
    static parseType(paramarg0: string): string;
    constructor(arg0: IInjectionPointContext, arg1: string, arg2: string[], arg3: string, arg4: string, arg5: number, arg6: number, arg7: string, arg8: number)
    // private args: { [key: string]: string };
    readonly at: string;
    readonly context: IInjectionPointContext;
    // private flags: number;
    readonly id: string;
    readonly opcode: number;
    readonly ordinal: number;
    readonly slice: string;
    readonly specifier: InjectionPoint$Specifier;
    readonly target: string;
    readonly targetRestriction: InjectionPoint$RestrictTargetLevel;
    readonly type: string;
    get(arg0: string): ITargetSelector;
    get<T extends Enum<T>>(arg0: string, arg1: T): T;
    get(arg0: string, arg1: boolean): boolean;
    get(arg0: string, arg1: number): number;
    get(arg0: string, arg1: string): string;
    getAt(): string;
    getContext(): IInjectionPointContext;
    getDescription(): string;
    getId(): string;
    getLocalVariableDiscriminator(): LocalVariableDiscriminator;
    getMessageSink(): IMessageSink;
    getMethod(): MethodNode;
    getMethodReturnType(): Type;
    getMixin(): IMixinContext;
    getOpcode(): number;
    getOpcode(arg0: number): number;
    getOpcode(arg0: number, arg1: number[]): number;
    getOpcodeList(arg0: string, arg1: number[]): number[];
    getOrdinal(): number;
    getParent(): AnnotationNode;
    getSlice(): string;
    getSpecifier(): InjectionPoint$Specifier;
    getTarget(): ITargetSelector;
    getTargetRestriction(): InjectionPoint$RestrictTargetLevel;
    getType(): string;
    isUnsafe(): boolean;
    // private parseArgs(arg0: string[]): void;
    toString(): string;
}