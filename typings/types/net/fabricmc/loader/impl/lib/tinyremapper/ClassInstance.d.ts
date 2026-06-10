import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InputTag } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { MemberInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/MemberInstance.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
import type { TinyRemapper$Direction } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$Direction.d.ts'
import type { TinyRemapper$MrjState } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$MrjState.d.ts'
import type { TrClass } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrEnvironment } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrField } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrField.d.ts'
import type { TrMember$MemberType } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
import type { TrMethod } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
export class ClassInstance extends Object implements TrClass {
    static getMrjName(paramarg0: string, paramarg1: number): string;
    constructor(arg0: TinyRemapper, arg1: boolean, arg2: InputTag[], arg3: Path[], arg4: number[])
    readonly access: number;
    // private children: ClassInstance[];
    readonly classVersion: number;
    // private context: TinyRemapper$MrjState;
    // private data: number[];
    // private inputTags: InputTag[];
    // private interfaces: string[];
    // private isInput: boolean;
    readonly members: { [key: string]: MemberInstance };
    readonly mrjOrigin: ClassInstance;
    readonly mrjVersion: number;
    readonly name: string;
    // private parents: ClassInstance[];
    // private resolvedMembers: { [key: string]: MemberInstance };
    // private signature: string;
    // private srcPath: Path[];
    readonly superName: string;
    // private tr: TinyRemapper;
    addInputTags(arg0: InputTag[]): void;
    addMember(arg0: MemberInstance): MemberInstance;
    constructMrjCopy(arg0: TinyRemapper$MrjState): ClassInstance;
    getAccess(): number;
    getClassVersion(): number;
    getContext(): TinyRemapper$MrjState;
    getEnvironment(): TrEnvironment;
    getFields(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrField) => boolean, arg4: TrField[]): TrField[];
    getInputTags(): InputTag[];
    getInterfaceNames0(): string[];
    getMember(arg0: TrMember$MemberType, arg1: string): MemberInstance;
    getMembers(): MemberInstance[];
    getMethods(): TrMethod[];
    getMethods(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrMethod) => boolean, arg4: TrMethod[]): TrMethod[];
    getMrjOrigin(): ClassInstance;
    getMrjVersion(): number;
    getName(): string;
    getSuperClass(): ClassInstance;
    getSuperName(): string;
    hasAnyInputTag(arg0: InputTag[]): boolean;
    init(arg0: string, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: string[]): void;
    isAssignableFrom(arg0: ClassInstance): boolean;
    isAssignableFrom(arg0: TrClass): boolean;
    isInput(): boolean;
    isInterface(): boolean;
    isMrjCopy(): boolean;
    isPublicOrPrivate(): boolean;
    isRecord(): boolean;
    propagate(arg0: TrMember$MemberType, arg1: string, arg2: string, arg3: string, arg4: TinyRemapper$Direction, arg5: boolean, arg6: boolean, arg7: boolean, arg8: ClassInstance[], arg9: ClassInstance[]): void;
    resolve(arg0: TrMember$MemberType, arg1: string): MemberInstance;
    // private resolveField(arg0: string): MemberInstance;
    resolveFields(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrField) => boolean, arg4: TrField[]): TrField[];
    // private resolveMethod(arg0: string): MemberInstance;
    resolveMethods(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrMethod) => boolean, arg4: TrMethod[]): TrMethod[];
    setContext(arg0: TinyRemapper$MrjState): void;
    toString(): string;
}